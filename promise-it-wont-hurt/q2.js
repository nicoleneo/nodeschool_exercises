/**
 * Created by nicoleneo on 21/07/2016.
 */
'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {fulfill('FULFILLED!');}, 300);
}).then((val) => console.log(val));
