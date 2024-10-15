#!/bin/sh

VPN=$(nordvpn status)
HOST=""
echo -n "Sudo password: "
read -s PASS

if [[ $VPN =~ "Disconnected" ]]; then
  HOST="dhs@192.168.1.219"
else
  HOST="dhs@72.239.163.236"
fi

cp -r build neil-elkadi
tar -czvf neil-elkadi.tar.gz neil-elkadi

COM="cd /usr/share/webapps; "
COM+="tar -xzf neil-elkadi.tar.gz && echo $PASS | sudo -S nginx -s reload; "
COM+="rm neil-elkadi.tar.gz"

scp -i ~/Sensative/.ssh/archpckey neil-elkadi.tar.gz $HOST:/usr/share/webapps
ssh -i ~/Sensative/.ssh/archpckey $HOST "$COM"

rm -r neil-elkadi neil-elkadi.tar.gz
