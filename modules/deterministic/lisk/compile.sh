#!/bin/sh
OLDPATH=$PATH
WHEREAMI=`pwd`
export PATH=$WHEREAMI/../../../node/bin:"$PATH"
NODEINST=`which node`

../../../node_modules/browserify/bin/cmd.js -r ./lisk-js -s wrapperlib | ../../../node_modules/uglify-js/bin/uglifyjs > wrapperlib.browserify.js

../../../node_modules/browserify/bin/cmd.js deterministic.js -o deterministic.browserify.js

cat wrapperlib.browserify.js deterministic.browserify.js > compiled.js

../../../tools/lzmapack.js compiled.js
rm deterministic.browserify.js
rm wrapperlib.browserify.js
rm compiled.js
mv compiled.js.lzma deterministic.js.lzma

PATH=$OLDPATH

