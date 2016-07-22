/**
 * Created by nicoleneo on 22/07/2016.
 */


function alwaysThrows() {
    var error = new Error('OH NOES');
    throw error;
}

function iterate(number) {
    console.log(number);
    return number+1;
}


var promise = Promise
    .resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);