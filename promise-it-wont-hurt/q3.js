/**
 * Created by nicoleneo on 22/07/2016.
 */
var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => {
        var errorObj = new Error('REJECTED!');
        reject(errorObj);
    }, 300);
}).then(null, onReject);

function onReject (error) {
    // Your solution here
    console.log(error.message);
}

// Your solution here
