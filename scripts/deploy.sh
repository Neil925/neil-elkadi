#!/usr/bin/env bash
#
# scripts/deploy.sh — build on this machine, verify here, install into the container.
#
#   npm run deploy                        build, local gate, ship, install, verify
#   npm run deploy -- --dry-run           build + local gate only; touches nothing remote
#   npm run deploy -- --rollback          point `current` at the previous release
#   npm run deploy -- --allow-dirty       deploy an uncommitted tree (last resort)
#   npm run deploy -- --no-build          reuse the existing build/ (after a --dry-run)
#
# Why it is shaped this way:
#   * The container has no node, git or rsync, so the build always happens here.
#     One tarball of the finished build/ is all that travels.
#   * Every remote step goes through agent-ssh-tools over the SSH control master
#     that Neil opens. If a command exits 90 there is no live master: this script
#     stops and prints the command to open it. It never authenticates itself.
#   * An install unpacks into releases/<git-sha> and atomically flips the
#     `current` symlink, so a deploy is all-or-nothing and a rollback is one mv.
#     nginx follows the symlink, so a content deploy needs no reload.
#   * The local gate has to pass before anything goes over the network. It once
#     caught manifest.json asking for logo192.png while the file is Logo192.png —
#     fine on a case-insensitive laptop, a 404 in production.

set -euo pipefail

# ---- what to deploy -------------------------------------------------------
SITE=${SITE:-neilelkadi.com}
TARGET=${TARGET:-pve}              # agent-ssh-tools target: its control socket
GUEST=${GUEST:-100}                # LXC guest id on that target
ROOT=/var/www/$SITE
KEEP=3                             # releases kept on the box, for rollback

REPO=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
STAGE=/tmp/opencode/nlk-stage
BUILD=$REPO/build

DRY=0 ROLLBACK=0 ALLOW_DIRTY=0 SKIP_BUILD=0
for a in "$@"; do
    case $a in
        --dry-run)    DRY=1 ;;
        --rollback)   ROLLBACK=1 ;;
        --allow-dirty) ALLOW_DIRTY=1 ;;
        --no-build)   SKIP_BUILD=1 ;;
        -h|--help)    sed -n '2,25p' "${BASH_SOURCE[0]}"; exit 0 ;;
        *)            echo "unknown argument: $a" >&2; exit 2 ;;
    esac
done

step() { printf '\n\033[1m== %s\033[0m\n' "$*"; }
die()  { printf 'deploy: %s\n' "$*" >&2; exit "${2:-1}"; }

# remote runs one command string inside the guest; agent-ssh-tools handles the
# socket, and its exit 90 means "no live master, a human must open it".
remote()     { pct -H "$TARGET" "$GUEST" "$1"; }
remote_out() { pct -H "$TARGET" "$GUEST" "$1" 2>/dev/null | tr -d '\r'; }

guard_master() {
    local rc=0 out
    out=$(sshq -H "$TARGET" 'printf "ok"' 2>&1) || rc=$?
    if [ "$rc" -ne 0 ]; then
        printf '%s\n' "$out" >&2
        die "no live SSH master for target '$TARGET' — a human has to open it:\n  ssh -M -S ~/.ssh/sockets/$TARGET.sock -fN <user@host>" "$rc"
    fi
}

# ---- local gate: prove the build is servable before the network -----------
local_gate() {
    [ -d "$BUILD" ] || die "no $BUILD — build first"
    command -v python3 >/dev/null || die "python3 needed for the local static gate"

    local port=$((8100 + RANDOM % 800)) fails=0 srv=""
    python3 -m http.server "$port" --bind 127.0.0.1 --directory "$BUILD" \
        >"$STAGE/serve.log" 2>&1 & srv=$!
    trap '[ -n "$srv" ] && kill "$srv" 2>/dev/null' EXIT

    local i=0
    until curl -sf -o /dev/null "http://127.0.0.1:$port/" 2>/dev/null; do
        i=$((i + 1)); [ $i -gt 40 ] && { kill "$srv" 2>/dev/null; die "local server would not start"; }
        sleep 0.25
    done
    printf '  serving %s on 127.0.0.1:%s\n' "$BUILD" "$port"

    probe() {
        local code
        code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:$port$1")
        if [ "$code" = 200 ]; then printf '  ok    %-44s %s\n' "$1" "$code"
        else printf '  FAIL  %-44s %s\n' "$1" "$code"; fails=$((fails + 1)); fi
    }

    probe /
    probe /index.html
    probe /manifest.json
    probe /robots.txt
    probe /favicon.ico
    probe /resume.pdf

    # Every asset index.html points at. Never hardcode these: the filenames are
    # content hashes, so they change with the build.
    local a
    while read -r a; do [ -n "$a" ] && probe "/$a"; done \
        < <(grep -oE 'static/[a-z]+/[A-Za-z0-9._-]+' "$BUILD/index.html" | sort -u)

    # Every icon the manifest promises. This is the case-sensitivity tripwire.
    while read -r a; do [ -n "$a" ] && probe "/$a"; done \
        < <(grep -oE '"src":[[:space:]]*"[^"]+"' "$BUILD/manifest.json" | sed 's/.*"\([^"]*\)"$/\1/')

    local title
    title=$(grep -oE '<title>[^<]*</title>' "$BUILD/index.html")
    printf '  title %s\n' "${title:-MISSING}"
    [ -n "$title" ] || fails=$((fails + 1))

    kill "$srv" 2>/dev/null; wait "$srv" 2>/dev/null; trap - EXIT
    [ "$fails" -eq 0 ] || die "$fails local check(s) failed — nothing was deployed"
    printf '  local gate passed\n'
}

# ---- remote install -------------------------------------------------------
do_rollback() {
    guard_master
    step "rollback: previous release becomes current"
    remote "set -e; cd $ROOT/releases
cur=\$(basename \$(readlink $ROOT/current))
prev=''
for r in \$(ls -1dt $ROOT/releases/*); do
    [ \"\$(basename \"\$r\")\" = \"\$cur\" ] || { prev=\$r; break; }
done
[ -n \"\$prev\" ] || { echo 'no previous release to roll back to' >&2; exit 1; }
ln -sfn \"\$prev\" $ROOT/.new; mv -T $ROOT/.new $ROOT/current
echo \"current -> \$prev\""
    verify
}

verify() {
    step "verify inside the container (Cloudflare not involved)"
    local code
    code=$(remote_out "curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1/ -H 'Host: $SITE'")
    printf '  http origin          %s\n' "$code"
    code=$(remote_out "curl -s -o /dev/null -w '%{http_code}' --resolve $SITE:443:127.0.0.1 https://$SITE/ 2>/dev/null || echo 'no-cert-or-tls-fail'")
    printf '  https origin (valid cert chain) %s\n' "$code"
    code=$(remote_out "curl -s -o /dev/null -w '%{http_code}' --resolve $SITE:443:127.0.0.1 https://$SITE/a-deep-link 2>/dev/null || echo fail")
    printf '  SPA deep link        %s (200 = nginx handed it to React)\n' "$code"
    code=$(remote_out "curl -sk -o /dev/null -w '%{http_code}' https://127.0.0.1/ -H 'Host: tv.theneil.zone'")
    printf '  collateral jellyfin  %s (302 = the family site is unaffected)\n' "$code"
    printf '  release in use       %s\n' "$(remote_out "readlink $ROOT/current")"
}

do_deploy() {
    step "preflight"
    git -C "$REPO" rev-parse --git-dir >/dev/null 2>&1 || die "not a git repo: $REPO"
    local sha dirty
    sha=$(git -C "$REPO" rev-parse --short HEAD)
    dirty=$(git -C "$REPO" status --porcelain)
    if [ -n "$dirty" ] && [ $ALLOW_DIRTY -eq 0 ]; then
        printf '%s\n' "$dirty" >&2
        die "tree is not clean — commit it, or pass --allow-dirty"
    fi
    printf '  release id   %s%s\n' "$sha" "$([ -n "$dirty" ] && echo '  (DIRTY TREE)')"
    command -v pct >/dev/null && command -v push >/dev/null \
        || die "agent-ssh-tools not on PATH — expected pct, push"
    [ $DRY -eq 1 ] || guard_master

    if [ $SKIP_BUILD -eq 0 ]; then
        step "build (locally; the container has no node)"
        [ -d "$REPO/node_modules" ] || npm --prefix "$REPO" ci --no-audit --no-fund
        # No source maps: they are ~half the payload, and publishing readable
        # source of a public site is a choice, not a default to keep by accident.
        GENERATE_SOURCEMAP=false npm --prefix "$REPO" run build
    fi

    step "local gate"
    mkdir -p "$STAGE"
    local_gate

    if [ $DRY -eq 1 ]; then
        step "dry run — nothing shipped"
        return 0
    fi

    step "package"
    local tarball=$STAGE/$SITE-$sha.tar.gz
    tar --owner=0 --group=0 --numeric-owner -czf "$tarball" -C "$BUILD" .
    local lmd5 lbytes
    lmd5=$(md5sum "$tarball" | cut -d' ' -f1)
    lbytes=$(wc -c < "$tarball")
    printf '  %s  %s bytes  md5 %s\n' "$tarball" "$lbytes" "$lmd5"

    step "ship (one push over the control master)"
    remote "mkdir -p $ROOT/releases $ROOT/staging && chmod 700 $ROOT/staging"
    push -H "$TARGET" "$GUEST" "$tarball" "$ROOT/staging/$sha.tar.gz" --mode 0600
    local rmd5
    rmd5=$(remote_out "md5sum $ROOT/staging/$sha.tar.gz" | cut -d' ' -f1)
    [ "$lmd5" = "$rmd5" ] || die "checksum mismatch after push (local $lmd5, remote ${rmd5:-none})"
    printf '  checksum matches on the container\n'

    step "install (unpack, then atomic symlink flip)"
    remote "set -e; d=$ROOT/releases/$sha
rm -rf \$d; mkdir -p \$d
tar -C \$d -xzf $ROOT/staging/$sha.tar.gz
find \$d -type d -exec chmod 755 {} +
find \$d -type f -exec chmod 644 {} +
ln -sfn \$d $ROOT/.new
mv -T $ROOT/.new $ROOT/current
rm -f $ROOT/staging/$sha.tar.gz
for r in \$(ls -1dt $ROOT/releases/* | tail -n +$((KEEP + 1))); do
    [ \"\$r\" = \"\$d\" ] || rm -rf \"\$r\"
done
echo \"current -> \$(readlink $ROOT/current)\"
find \$d -type f | wc -l | sed 's/^/files installed: /'"

    verify

    step "from outside Cloudflare"
    for u in "https://$SITE/" "https://www.$SITE/"; do
        printf '  %-32s %s\n' "$u" "$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$u")"
    done
    printf '\n  confirm a hashed asset and its cache header:\n'
    remote_out "curl -s http://127.0.0.1/ -H 'Host: $SITE'" \
        | grep -oE 'static/[a-z]+/[A-Za-z0-9._-]+' | head -1 \
        | while read -r a; do
            printf '    %s\n' "$(curl -s -o /dev/null -w '%{http_code} %{header_json}' "https://$SITE/$a" \
                | python3 -c 'import sys,json;r=sys.stdin.read();c,h=r.split(" ",1);print(c, json.loads(h).get("cache-control"))' 2>/dev/null)"
        done
}

cd "$REPO"
if [ $ROLLBACK -eq 1 ]; then do_rollback; else do_deploy; fi
printf '\ndone\n'
