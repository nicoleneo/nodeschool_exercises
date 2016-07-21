/**
 * Created by nicoleneo on 21/07/2016.
 */
var http = require('http');
var urlsArr = [];
urlsArr.push(process.argv[2]);
urlsArr.push(process.argv[3]);
urlsArr.push(process.argv[4]);

var urlsDataArr = [];
var checkEnds = [false, false, false];


function getUrlContents(urlsArr, itemNum) {
    var dataArr = [];
    url = urlsArr[itemNum];
    http.get(url, (response) => {
        response
            .setEncoding('utf8')
            .on('data', (data) => dataArr.push(data))
            .on('error', (err) => console.error(err))
            .on('end', () => {
                var joinedStr = dataArr.join('');
                urlsDataArr[itemNum] = joinedStr;
                checkEnds[itemNum] = true;
                // if completed array doesn't contain anymore false
                if (checkEnds.indexOf(false) == -1) {
                    urlsDataArr.forEach((item) => { console.log(item);});
                }
            })

    }).on('error', (err) => console.error(err));

}

getUrlContents(urlsArr, 0);
getUrlContents(urlsArr, 1);
getUrlContents(urlsArr, 2);
