#!/bin/bash

VERSION=${1:-0.0.1}

echo "No argument supplied"
composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile microcredit@$VERSION.bna
composer network upgrade -c PeerAdmin@hlfv1 -n microcredit -V $VERSION
composer network ping --card admin@microcredit
