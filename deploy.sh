#!/bin/sh

source ./.env

if [[ -z "${SSH_HOST}" ]]; then
  echo "Missing SSH_HOST environment variable"
  exit 1
fi

if [[ -z "${SSH_USER}" ]]; then
  echo "Missing SSH_USER environment variable"
  exit 1
fi

if [[ -z "${SSH_KEY}" ]]; then
  echo "Missing SSH_KEY environment variable"
  exit 1
fi

if [[ -z "${PASS}" ]]; then
  echo "Missing PASS environment variable"
  exit 1
fi

KEY="${SSH_KEY}"
HOST="${SSH_USER}@${SSH_HOST}"

cp -r build neil-elkadi
tar -czvf neil-elkadi.tar.gz neil-elkadi

COM="cd /usr/share/webapps; "
COM+="tar -xzf neil-elkadi.tar.gz && echo $PASS | sudo -S nginx -s reload; "
COM+="rm neil-elkadi.tar.gz"

scp -i $KEY neil-elkadi.tar.gz $HOST:/usr/share/webapps
ssh -i $KEY $HOST "$COM"

rm -r neil-elkadi neil-elkadi.tar.gz
