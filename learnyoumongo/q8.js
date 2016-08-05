var dbUrl = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
mongo.connect(dbUrl, function(err, db) {
    var parrots = db.collection('parrots');
    var age = parseInt(process.argv[2]);

    parrots.count({
            age: {
                $gt: +age
            }
        },
        function(err, count) {
            if (err) throw err;
            console.log(count);
            db.close();
        });
    db.close();
})