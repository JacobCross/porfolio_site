var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/me', function (req, res) {
  res.send('Jacob Cross, 18, San Francisco CA');
});

app.post('/me', function (req, res) {
  res.send('Got a POST request');
});

//functions for handling data output
var cb0 = function(req, res, next){
  res.send('Hello from cb0');
  next();
}
var cb1 = function(req, res, next){
  res.send('Hello from cb1')
    next();
}
var cb2 = function(req, res, next){
  res.send('Hello from cb2')
}

app.get('/function', [cb0, cb1, cb2]);

app.use(express.static('public'));
