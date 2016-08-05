var dbName = process.argv[2];
var dbUrl = 'mongodb://localhost:27017/' + dbName;
var mongo = require('mongodb').MongoClient
var collectionName = process.argv[3];
var idStr = process.argv[4];

mongo.connect(dbUrl, function(err, db) {
    var collection = db.collection(collectionName);
    collection.remove({
        _id: idStr,
    }, function(err, data) {
        if (err) throw err;
        db.close();
    });
    db.close();
})