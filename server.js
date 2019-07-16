const express = require('express');
const server = express();
const PORT = process.env.PORT | 3500;

server.get('/', function (req, res) {
  res.send('Welcome to my server in Express');
});

server.get('/hello', function (req, res) {
  res.send('Hello');
});

server.listen(PORT, function () {
  console.log("Server listening at " + PORT);
});
