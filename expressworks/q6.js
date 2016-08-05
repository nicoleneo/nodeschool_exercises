    var express = require('express');
    var app = express();
    app.put('/message/:ID', function(req, res) {
        var id = req.params.ID;
        var hash = require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex');
        res.send(hash);
    });
    app.listen(process.argv[2]);