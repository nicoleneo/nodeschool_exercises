var http = require('http')
var fs = require("fs")

var port = process.argv[2];
var filePath = process.argv[3];



var server = http.createServer((request, response) => {
    var bufferArr = [];
    var fileStream = fs.createReadStream(filePath, 'utf8');
    fileStream
        .on('error', (err) => console.error(err))
        .on('data', (data) => {
            bufferArr.push(data);})
        .on('end', () => response.end(bufferArr.join('')));
});
server.listen(port);