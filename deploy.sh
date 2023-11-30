#!/bin/sh

VPN=$(nordvpn status)
HOST=""

if [[ $VPN =~ "Disconnected" ]]; then
    HOST="root@192.168.1.219"
else
    HOST="root@72.239.188.77"
fi

cp -r build neil-elkadi;
tar -czvf neil-elkadi.tar.gz neil-elkadi;

COM="cd /usr/share/webapps; ";
COM+="tar -xzf neil-elkadi.tar.gz && nginx -s reload; ";
COM+="rm neil-elkadi.tar.gz";

scp -i ~/Sensative/.ssh/archlpkey neil-elkadi.tar.gz $HOST:/usr/share/webapps;
ssh -i ~/Sensative/.ssh/archlpkey $HOST "$COM";

rm -r neil-elkadi neil-elkadi.tar.gz;