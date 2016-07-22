var fetch = require('node-fetch');

fetch('http://localhost:7000')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        fetch('http://localhost:7001/'+data)
            .then(function(response) {
                return response.json();
        })
            .then(console.log);
    });
