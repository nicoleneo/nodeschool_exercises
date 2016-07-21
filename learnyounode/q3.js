var fs = require('fs');
var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var fileContentsArray = fileBuffer.toString().split('\n');
console.log(fileContentsArray.length-1); //no \n at end of file
