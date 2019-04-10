<img align="right" height="32" src="https://coinstorm.net/ioc_logo_fund.png">

# Internet of Coins module deterministic

## NOTICE: We have migrated. Find our latest code here: https://github.com/hybrix-io

## Overview

This repository contains module-deterministic used by Internet of Coins daemon hybridd. The module provides deterministic code routines to create trustless transactions that can be pushed into cryptocurrency networks.

## Usage

This code is not to be run directly. Instead compiling the routines can be done using the script <i>compileall.sh</i> in modules/deterministic . The resulting lzma packages created in subfolders can be placed in the modules/deterministic/cryptocurrency directories of repository <i>hybridd</i>, and will be used by the daemon to inject code in the browser session when using the GUI wallet.

## Authors

Joachim de Koning <joachim@internetofcoins.org>

Others: many libraries and code snippets contained herein have other authors and their own licensing included.

## License

This work is licensed under the GNU GPLv3 license. (See the LICENSE file in the root of this repository.)

Copyright (c) 2014-2017 Internet of Coins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
