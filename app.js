var express = require('express');
var app = express();


// var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/views/index.html');
});

// var Produce = require('/public/js/inseason.js');
// app.get('/api/inseason', function(req, res){
//   var pro = [];
//   for (var i = 0; i < produce.length; i++) {
//     pro.save(function(err, dbPro){
//       console.log(dbPro);
//     });
// })

var port = 3000;
app.listen(port, function(){
  console.log('making better eating habits at ' + port);
});
