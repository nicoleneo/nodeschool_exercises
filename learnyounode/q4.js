var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    if (data) {
        var fileBufferAsStr = data;
        fileSplitByLine = fileBufferAsStr.split("\n");
        console.log(fileSplitByLine.length-1);
    }
});
