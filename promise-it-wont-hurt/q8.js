/**
 * Created by nicoleneo on 22/07/2016.
 */


function attachTitle(firstArg) {
    return 'DR. '+firstArg;
}

var promise = Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);