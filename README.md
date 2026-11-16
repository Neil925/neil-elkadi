# neilelkadi.com

Neil's personal site: Create React App + TypeScript + Tailwind, served as static
files by nginx on the proxy container, in front of Cloudflare.

Live at <https://neilelkadi.com>. The `www` name does not exist in DNS.

## Deploy

```
npm run deploy:dry     # build + local checks only, touches nothing remote
npm run deploy         # build, local gate, ship, install, verify
npm run rollback       # previous release becomes current again
```

What `scripts/deploy.sh` actually does:

1. **Preflight** — the tree must be clean, so a release is always a commit. It
   checks the SSH control master; if `agent-ssh-tools` exits **90** there is no
   live master and a human has to open one. The script never authenticates.
2. **Build here.** The container has no node, git or rsync — one tarball of
   `build/` is all that travels. Source maps are switched off: about half the
   payload, and no reason to publish readable source.
3. **Local gate.** A throwaway `python3 -m http.server` over `build/` on
   127.0.0.1: `/`, every asset named in `index.html` (the names are content
   hashes, so they are read from the file, never hardcoded), every icon named in
   `manifest.json`, and `resume.pdf`. Any 404 aborts before anything goes over
   the network. This is what caught `manifest.json` asking for `logo192.png`
   while the file was `Logo192.png` — harmless on a case-insensitive laptop, a
   404 on the Linux origin.
4. **Ship** one tarball with `push`, then compare md5 on both ends.
5. **Install** by unpacking to `/var/www/neilelkadi.com/releases/<git-sha>` and
   atomically flipping the `current` symlink. A deploy is all-or-nothing, the
   last three releases stay on disk, and rollback is one `mv`. nginx follows the
   symlink, so a content deploy needs **no nginx reload**.
6. **Verify** from inside the container first (origin over http and https, an
   SPA deep link, and `tv.theneil.zone` to prove the family site is unaffected),
   then through Cloudflare.

Host-side facts, and the nginx vhost, live with the code:

| Path | What |
| --- | --- |
| `deploy/nginx/neilelkadi.com.conf` | the vhost, installed at `/etc/nginx/sites-available/neilelkadi.com.conf` on the proxy container (CT 100) |
| `/var/www/neilelkadi.com/releases/<sha>` | unpacked builds |
| `/var/www/neilelkadi.com/current` | symlink nginx serves; what a deploy flips |

The certificate is a Let's Encrypt cert for `neilelkadi.com` at
`/etc/letsencrypt/live/neilelkadi.com/`, obtained with certbot's `dns-cloudflare`
plugin on the container. It is **not** the `*.theneil.zone` wildcard — that one
never covers this domain, so the vhost sets its own `ssl_certificate` lines
instead of including `snippets/tls.conf`. Renewal is the `certbot.timer`; a
deploy hook in `/etc/letsencrypt/renewal-hooks/deploy/` reloads nginx afterwards.

`scripts/deploy.sh` assumes `agent-ssh-tools` is installed and that the target's
control socket is already open:

```
ssh -M -S ~/.ssh/sockets/pve.sock -fN root@192.168.1.5     # a human runs this
```

## Develop

```
npm install
npm start          # CRA dev server, http://localhost:3000
npm run serve      # plain static server over build/ on 127.0.0.1:8099
npm test
```

## Notes

- Routing is `BrowserRouter`, so unknown paths must reach React (it owns the
  NotFound route). The vhost's `try_files $uri $uri/ /index.html` is what makes
  that true; without it nginx answers 404 itself.
- `index.html` is served `no-cache` and `/static/` is `immutable`. That split is
  not decoration: `index.html` names the hashed filenames, so a cached one after
  a deploy points at JavaScript that no longer exists.
- Cloudflare is orange-clouded with SSL/TLS mode **Full (strict)**, which is why
  the port-80 block is a plain 301 to https, and why the origin needs a valid
  cert rather than a self-signed one.
- CRA (`react-scripts`) is deprecated upstream but still builds cleanly on
  Node 26. Moving to Vite is a separate decision, not part of keeping this site
  running.
