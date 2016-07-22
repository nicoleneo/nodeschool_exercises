var fetch = require('node-fetch');

fetch('http://localhost:1337')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
    });