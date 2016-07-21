var readAndFilter = require("./q6_module.js");
var dirPath = process.argv[2];
var fileExtension = process.argv[3];


function printFiles(err, filesArr
) {
    if (err) {
        console.error(err);
    }
    filesArr.forEach((file) => console.log(file));
}
readAndFilter(dirPath, fileExtension, printFiles);