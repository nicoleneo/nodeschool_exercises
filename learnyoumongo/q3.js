var dbUrl = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
mongo.connect(dbUrl, function(err, db) {
    var parrots = db.collection('parrots');
    var age = parseInt(process.argv[2]);

    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, documents) {
        console.log(documents);
    });
    db.close();
    // db gives access to the database
})