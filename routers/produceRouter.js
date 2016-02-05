var express = require('express');
var router = express.Router();
var Produce = require('../models/Produce');

router.post('/', function(req, res){
  var produceData = req.body.produce
  console.log(produceData);
  // var pro;
  // for (var i = 0; i < produce.length; i++) {
  //   pro = new Produce(produce[i]);
  //   pro.save(function(err, dbPro){
  //     console.log(dbPro);
  //   });
  // }
});
