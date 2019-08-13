const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

server.use(express.static(path.join(__dirname, '/build')));

function homeResponse(req, res) {
  return res.sendFile(path.join(__dirname, '/build/', 'index.html'));
}

server.get('/', homeResponse);

server.get('/home', homeResponse);

server.get('/skills', function (req, res) {
  return res.sendFile(path.join(__dirname, '/build/', 'skills.html'));
});

server.get('/**', function (req, res) {
  return res.status(400).send('404 not found');
});

server.listen(PORT, function () {
  console.log("Server listening at " + PORT);
});