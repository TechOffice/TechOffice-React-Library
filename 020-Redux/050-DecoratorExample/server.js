const path = require('path');
const express = require('express');

const app = express();
const proxy = require('express-http-proxy');

app.use('/bin', express.static(path.join(__dirname, 'bin')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/index.html') )
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
