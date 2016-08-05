    var express = require('express');
    var app = express();
    var fs = require('fs');
    app.get('/books/', function(req, res) {
        var filePath = process.argv[3];
        fs.readFile(filePath, function(error, data) {
            if (error) {
                throw error;
            }

            jsonObj = JSON.parse(data);
            res.send(jsonObj);

        });
    })
    app.listen(process.argv[2]);