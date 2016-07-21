var fs = require('fs');
var dirPath = process.argv[2];
var fileExtension = process.argv[3];


fs.readdir(dirPath, (err, list) => {
    if (err) {
        return console.error(err);
    }
    //console.log(list);
    var filteredFiles = list.filter((item) => {
        if (item.endsWith("."+fileExtension)) {
            console.log(item);
            return true;
        }
    });
});