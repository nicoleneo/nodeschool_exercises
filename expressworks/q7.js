    var express = require('express');
    var app = express();
    app.get('/search/:?', function(req, res) {
        var jsonQuery = req.query;
        res.send(jsonQuery);
    })
    app.listen(process.argv[2]);