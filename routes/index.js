var express = require('express');
var passport = require('passport');
// var Account = require('../models/account');
var Produce = require('../models/produce');
var router = express.Router();

router.get('/produce', function(req, res){
  Produce.find({}, function(err, dbProduce){
    res.json(dbProduce);
  });
});

router.get('/', function(req, res){
  res.sendfile('./public/views/index.html', {user: req.user});
});

// router.get('/register', function(req, res){
//   res.render('register', {});
// });
//
// router.post('/register', function(req, res){
//   Account.register(new Account({ username: req.body.username}), req.body.password, function(err, account){
//     if (err){
//       return res.render('register', {account: account});
//     }
//     passport.authenticate('local')(req, res, function(){
//       res.redirect('/');
//     });
//   });
// });
//
// router.get('/login', function(req, res){
//   res.render('login', {user: req.user});
// });
//
// router.post('/login', passport.authenticate('local'), function(req, res){
//   res.redirect('/');
// });
//
// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;
