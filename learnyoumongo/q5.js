var dbUrl = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient

var doc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
};


mongo.connect(dbUrl, function(err, db) {
    var docs = db.collection('docs');
    docs.insert(doc, function(err, data) {
        // handle error
        if (err) throw err;
        console.log(JSON.stringify(doc));
        db.close();
    })
    db.close();
    // db gives access to the database
})