/**
 * Created by nicoleneo on 21/07/2016.
 */
var http = require('http');
var url = process.argv[2];
var dataArr = [];
http.get(url, (response) => {
    response
        .setEncoding('utf8')
        .on('data', (data) => dataArr.push(data))
        .on('error', (err) => console.error(err))
        .on('end', () => {
            var joinedStr = dataArr.join('');
            console.log(joinedStr.length);
            console.log(joinedStr);
        })
    
}).on('error', (err) => console.error(err));