/**
 * Created by nicoleneo on 22/07/2016.
 */

function all(promise1, promise2) {
    var counter = 0;
    var arrayRes = [];
    var allPromises = new Promise((fulfill, reject) => {
        promise1.then((val) => {
            arrayRes[0] = val;
            counter++;
            if (counter >= 2) {
                fulfill(arrayRes);
            }
        }, null);
        promise2.then((val) => {
            arrayRes[1] = val;
            counter++;
            if (counter >= 2) {
                fulfill(arrayRes);
            }
        }, null);
    });
    return allPromises;
}

all(getPromise1(), getPromise2()).then(console.log);