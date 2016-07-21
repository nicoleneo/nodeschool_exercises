var fs = require('fs');

module.exports = function readAndFilter(dirPath, fileExtension, callbackFunc) {
    fs.readdir(dirPath, (err, list) => {
        if (err) {
            return callbackFunc(err);
        }
        //console.log(list);
        var filteredFiles = list.filter((item) => {
            if (item.endsWith("."+fileExtension)) {
                return true;
            }
        });
        return callbackFunc(null, filteredFiles);
    });
}