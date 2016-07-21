/**
 * Created by nicoleneo on 21/07/2016.
 */
var http = require('http');
var url = process.argv[2];
http.get(url, (response) => {
    response
        .setEncoding('utf8')
        .on('data', (data) => console.log(data))
        .on('error', (err) => console.error(err))
    
}).on('error', (err) => console.error(err));