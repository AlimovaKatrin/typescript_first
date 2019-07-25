var fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
