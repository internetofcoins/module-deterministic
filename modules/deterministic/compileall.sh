#!/bin/sh
echo "Compiling all deterministic routines..."
HERE="`pwd`";
cd "`cd $( dirname $BASH_SOURCE[0] ) && pwd`"
for D in *; do
    if [ -d "${D}" ]; then
        echo " - compiling ${D}..."
	cd ${D}
	./compile.sh
	cd ..
    fi
done
cd "${HERE}"
echo "All done."
