/**
 * Created by nicoleneo on 22/07/2016.
 */
var promiseReject = Promise.reject(new Error('Error message'));
promiseReject.catch(function (errorObj) {
    console.error('THERE IS AN ERROR!!!');
    console.error(errorObj.message);
});

var promiseResolve = Promise.resolve('Resolved message');