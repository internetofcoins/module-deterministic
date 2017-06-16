// (C) 2015 Internet of Coins / Metasync / Joachim de Koning
// hybridd module - electrum/deterministic_source.js
// Deterministic encryption wrapper for Electrum
//
// [!] Browserify this and save to deterministic.js.lzma to enable sending it from hybridd to the browser!
//
var wrapper = (
	function() {
    var base58 = require('bs58');
    var ecurve = require('ecurve');
    var BigInteger = require('bigi');
    // DISABLED INSIDE wrapper FUNCTION: var wrapperlib = require('bitcoinjs-lib');
		
		var functions = {					
			// create deterministic public and private keys based on a seed
			keys : function(data) {
        //function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }
        //var altcoin = wrapperlib.networks.litecoin  <= USE data.mode (can be bitcoin, litecoin, zcash, etc!)
        var hash = wrapperlib.crypto.sha256(data.seed);
        var d = BigInteger.fromBuffer(hash);
        var keyPair = new wrapperlib.ECPair(d);
        var wif = keyPair.toWIF()
        // returns object { WIF:'Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct' }
				return { WIF:wif };
			},

      // generate a unique wallet address from a given public key
      address : function(data) {
        var keyPair = wrapperlib.ECPair.fromWIF(data.WIF)
        return keyPair.getAddress();
      },

			transaction : function(data) {
        // return deterministic transaction data
        var keyPair = wrapperlib.ECPair.fromWIF( data.keys.WIF );
        var tx = new wrapperlib.TransactionBuilder();

        // add inputs
        for(var i in data.unspent.unspents) {
          tx.addInput(data.unspent.unspents[i].txid,parseInt(data.unspent.unspents[i].txn));
        }

        // add outputs
        tx.addOutput(data.target,parseInt(data.amount));
        var outchange=parseInt(data.unspent.change); // fee is already being deducted when calculating unspents
        if(outchange>0) { tx.addOutput(data.source,outchange); }
        
        // sign inputs
        for(var i in data.unspent.unspents) {
          tx.sign(parseInt(i),keyPair);
          //var privKey = Bitcoin.ECKey.fromBytes(privKeys[walletAddress.index], true);
        }

        return tx.build().toHex();

        // Other options for later:
        // Adding a message: https://wrapperlib.stackexchange.com/questions/30834/create-op-return-tx-with-altcoinjs-lib
        // Calculate Transaction ID
        //var txid = wrapperlib.bufferutils.reverse(result.getHash()).toString('hex')
        //return txid;
			},

		}
		
		return functions;
	}
)();

// export the functionality to a pre-prepared var
deterministic = wrapper;
