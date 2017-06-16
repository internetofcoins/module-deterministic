// (C) 2015 Internet of Coins / Metasync / Joachim de Koning
// hybridd module - lisk/deterministic_source.js
// Deterministic encryption wrapper for Lisk
//
// [!] Browserify this and save to deterministic.js.lzma to enable sending it from hybridd to the browser!
//

var wrapper = (
	function() {
		//var lisk = require('./lisk-js/index.js');
    //var LSK = wrapperlib.api({testnet: false});
		
		var functions = {					
			// create deterministic public and private keys based on a seed
			keys : function(data) {
				// return object { publicKey:'', privateKey:'' }
				return wrapperlib.crypto.getKeys(data.seed);
			},

      // generate a unique wallet address from a given public key
      address : function(data) {
        return wrapperlib.crypto.getAddress(data.publicKey);
      },

			transaction : function(data) {
        // return deterministic transaction data
				return JSON.stringify( wrapperlib.transaction.createTransaction(data.target, parseInt(data.amount), data.seed) );  // example: lisk.transaction.createTransaction("1859190791819301L", amount, "passphrase", "secondPassphrase");
        // for more information see: https://github.com/corsaro1/lisk_broadcast
			},
			
		}
		
		return functions;
	}
)();

// export the functionality to a pre-prepared var
deterministic = wrapper;
