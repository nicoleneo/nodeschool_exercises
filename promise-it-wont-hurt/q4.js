/**
 * Created by nicoleneo on 22/07/2016.
 */
var promise = new Promise(function(fulfill, reject) {
    fulfill('I FIRED');
    var errorObj = new Error('I DID NOT FIRE');
    reject(errorObj);
}).then(console.log, onRejected);

function onRejected(error) {
    console.log(error.msg);
}