const db = require('./firebase-connect-db');
const util = require('./util');
db.ref(util.saleBranch + '/products')
    .orderByChild('store_id')
    .equalTo(0)
	.once('value')
	.then(snapShot => {
		console.log(snapShot.val());
		process.exit();
	});
