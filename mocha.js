const util = require('./lib/util');
const Mocha = require('mocha');

const mocha = new Mocha({});

mocha.addFile('test/firebase-connect-db.js');

let passes = 0;
let failures = 0;

let log = {
	status: false,
	content: ''
};

mocha.run()
    .on('pass', function(test) {
        passes++;
    })
    .on('fail', function(test, err) {
        failures++;
        // log.content += util.format('--------\nTest title: %s\nTest duration: %sms\n%s', test.title, test.duration, (err + '\n'));
    })
    .on('end', function() {
        // let summary = util.format('Passes/Total: %d/%d', passes, (passes + failures));
        // log.content += summary;
        
        console.log('passes/total:', `${passes}/${passes + failures}`);
        process.exit();
    })