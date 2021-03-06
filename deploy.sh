#!/bin/sh
set -x
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_d1b4660665e6_key -iv $encrypted_d1b4660665e6_iv -in travis_deploy_rsa.enc -out travis_deploy_rsa -d
chmod 600 travis_deploy_rsa
ssh-add travis_deploy_rsa
ssh-keyscan -H me.michaelkohler.info >> ~/.ssh/known_hosts

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/index.html travis@me.michaelkohler.info:/var/www/html/okrs/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/favicon.ico travis@me.michaelkohler.info:/var/www/html/okrs/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/robots.txt travis@me.michaelkohler.info:/var/www/html/okrs/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/* travis@me.michaelkohler.info:/var/www/html/okrs/dist/
