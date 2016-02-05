var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

var port = 3000;
app.listen(port, function(){
  console.log('making better eating habits at ' + port);
});
