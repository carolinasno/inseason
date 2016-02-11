var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
// app.use('/users', users);

// var Account = require('./models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

var Produce = require('./models/produce');

mongoose.connect('mongodb://localhost/inseason');

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development'){
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var port = 3000;
app.listen(port, function(){
  console.log('making better eating habits at ' + port);
});

module.exports = app;
