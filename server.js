const express = require('express');
const server = express();

server.get('/', function (req, res) {
  res.send('Welcome to my server in Express');
});

server.get('/hello', function (req, res) {
  res.send('Hello');
});

server.listen(3000, function () {
  console.log("Server listening at 3000");
});