#!/bin/sh

HOST=""
KEY="~/Sensative/.ssh/archlpkey"
echo -n "Sudo password: "
read -s PASS
echo -e "\n"

if [ -z $1 ]; then
  echo -n "(L)ocal?/(r)emote: "
  read loc
  if [ -z loc ] || [[ $loc == "" ]]; then
    loc=r
  fi
else
  loc=$1
fi

if [[ $loc == "r" ]] || [[ $loc == "R" ]]; then
  HOST="dhs@67.235.178.246"
elif [[ $loc == "l" ]] || [[ $loc == "L" ]]; then
  HOST="dhs@192.168.1.2"
else
  echo "Invalid."
  exit 1
fi

cp -r build neil-elkadi
tar -czvf neil-elkadi.tar.gz neil-elkadi

COM="cd /usr/share/webapps; "
COM+="tar -xzf neil-elkadi.tar.gz && echo $PASS | sudo -S nginx -s reload; "
COM+="rm neil-elkadi.tar.gz"

scp -i $KEY neil-elkadi.tar.gz $HOST:/usr/share/webapps
ssh -i $KEY $HOST "$COM"

rm -r neil-elkadi neil-elkadi.tar.gz
