var http = require('http')
var fs = require("fs")

var port = process.argv[2];



var server = http.createServer((request, response) => {
    if (request.method =='POST') {
        request.on('data', (data) => {
            response.write(data.toString().toUpperCase());
        });
    }
    else {
        return response.end("Not a POST");
    }
});
server.listen(port);