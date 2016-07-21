var http = require('http')
var fs = require("fs")
var url = require('url')

var port = process.argv[2];



var server = http.createServer((request, response) => {
    var parsedUrl = url.parse(request.url, true);
    console.log(parsedUrl);
    if (parsedUrl.pathname.includes('parsetime')) {
        var convdt = new
            Date(parsedUrl.query.iso);
        var jsonDate = {
            hour: convdt.getHours(),
            minute: convdt.getMinutes(),
            second: convdt.getSeconds()
        };
        var jsonStr = JSON.stringify(jsonDate);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(jsonStr);
    }
    else if (parsedUrl.pathname.includes('unixtime')) {
        var convdt = new
            Date(parsedUrl.query.iso);
        var unixTime = convdt.getTime();
        var jsonStr = JSON.stringify({
            unixtime: unixTime
        });
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(jsonStr);
    }
});
server.listen(port);