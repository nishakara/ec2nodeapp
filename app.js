var express = require('express');
var app = express();

      app.get('/', function (req, res) {
            console.log('ready');
            res.send('Hello World!');
      });
      
      app.listen(80, function () {
            
            console.log('app listening port 80');
      
      });