const express = require('express');
const server = express();
const PORT = process.env.PORT || 3500;

server.get('/', function (req, res) {
  console.log('Root request');
  res.status(200).send('Welcome to my server in Express');
});

server.get('/hello', function (req, res) {
  console.log('Hello route request');
  res.status(200).send('Hello');
});

server.listen(PORT, function () {
  console.log("Server listening at " + PORT);
});
