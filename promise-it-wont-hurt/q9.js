/**
 * Created by nicoleneo on 22/07/2016.
 */
var invalidJSON = process.argv[2];

function parsePromised(jsonStr) {
    var promise = new Promise((fulfill, reject) => {
        try {
            var jsonResult = JSON.parse(jsonStr);
            fulfill(jsonResult);

        }
        catch(err) {
            reject(err);
        }
    });
    return promise;
}

parsePromised(invalidJSON).then(null, console.log);