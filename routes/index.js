var express = require('express'),
    passport = require('passport'),
    Produce = require('../models/produce'),
    router = express.Router();

router.get('/produce', function(req, res){
  Produce.find({}, function(err, dbProduce){
    res.json(dbProduce);
  });
});

router.get('/', function(req, res){
  res.sendfile('./public/views/index.html', {user: req.user});
});

module.exports = router;
