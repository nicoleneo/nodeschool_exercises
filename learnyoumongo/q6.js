var dbName = process.argv[2];
var dbUrl = 'mongodb://localhost:27017/'+dbName;
var mongo = require('mongodb').MongoClient


mongo.connect(dbUrl, function(err, db) {
    var users = db.collection('users');
users.update({
      username: 'tinatime',
    }, {
      $set: {
        age: 40
      }
    }, function(err, data) {
if (err) throw err;
db.close();
});
    db.close();
})
