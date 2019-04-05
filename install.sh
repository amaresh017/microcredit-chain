#!/bin/bash

VERSION=${1:-0.0.1}

composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile microcredit@$VERSION.bna
composer network start --networkName microcredit --networkVersion $VERSION --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@microcredit

