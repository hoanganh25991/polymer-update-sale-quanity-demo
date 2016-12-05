const assert = require('assert');
const util = require('../lib/util');
describe('firebase-connect-db', function() {
    it('should get value on snapshot', function(done) {
		let firebaseDbPath = util.getPath('lib/firebase-connect-db.js');
    	// let firebaseDb = require(util.getPath('lib/firebase-connect-db'));
    	let firebaseDb = require(firebaseDbPath);

    	let ref = firebaseDb.ref(util.saleBranch);

    	return new Promise(function (resolve) {
			    ref.once('value', function(snapshot){
	    			assert(true);
	    			resolve();
	    		})
			})
			.then(done());
    });
});