rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/index.html travis@me.michaelkohler:/var/www/html/okrs/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist travis@me.michaelkohler:/var/www/html/okrs/dist
