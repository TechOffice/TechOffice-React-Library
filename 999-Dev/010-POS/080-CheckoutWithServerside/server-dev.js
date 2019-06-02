const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/index.html') )
});

app.get('/api/productsAndServices', function(req, res){
  res.json({
    "services": [
      {
        "id": 8,
        "type": "service",
        "name": "Testing Service 1",
        "description": "This is Testing Service 1",
        "price": 1
      },
      {
        "id": 9,
        "type": "service",
        "name": "Testing Service 2",
        "description": "This is Testing Service 2",
        "price": 1
      },
      {
        "id": 10,
        "type": "service",
        "name": "Testing Service 3",
        "description": "This is Testing Service 3",
        "price": 1
      },
      {
        "id": 11,
        "type": "service",
        "name": "Testing Service 4",
        "description": "This is Testing Service 4",
        "price": 1
      },
      {
        "id": 12,
        "type": "service",
        "name": "Testing Service 5",
        "description": "This is Testing Service 5",
        "price": 1
      },
      {
        "id": 13,
        "type": "service",
        "name": "Testing Service 6",
        "description": "This is Testing Service 6",
        "price": 1
      },
      {
        "id": 14,
        "type": "service",
        "name": "Testing Service 7",
        "description": "This is Testing Service 7",
        "price": 1
      }
    ],
    "products": [
      {
        "id": 1,
        "type": "product",
        "name": "Testing Product 1",
        "description": "This is testing Product 1",
        "price": 1
      },
      {
        "id": 2,
        "type": "product",
        "name": "Testing Product 2",
        "description": "This is testing Product 2",
        "price": 1
      },
      {
        "id": 3,
        "type": "product",
        "name": "Testing Product 3",
        "description": "This is testing Product 3",
        "price": 1
      },
      {
        "id": 4,
        "type": "product",
        "name": "Testing Product 4",
        "description": "This is testing Product 4",
        "price": 1
      },
      {
        "id": 5,
        "type": "product",
        "name": "Testing Product 5",
        "description": "This is testing Product 5",
        "price": 1
      },
      {
        "id": 6,
        "type": "product",
        "name": "Testing Product 6",
        "description": "This is testing Product 6",
        "price": 1
      },
      {
        "id": 7,
        "type": "product",
        "name": "Testing Product 7",
        "description": "This is testing Product 7",
        "price": 1
      }
    ]
  });
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
