var dbUrl = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
mongo.connect(dbUrl, function(err, db) {
    var collection = db.collection('prices');
    var size = process.argv[2];
    collection.aggregate([{
        $match: {
            size: size
        }
    }, {
        $group: {
            _id: 'average' // This can be an arbitrary string in this case
                ,
            average: {
                // $sum is the operator used herei
                // expression of price column
                $avg: '$price'
            }
        }
    }]).toArray(function(err, results) {
        // handle error
        if (err) throw err;
        var price = results[0].average.toFixed(2);

        console.log(price);
    })

    db.close();
})