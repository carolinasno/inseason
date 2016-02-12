var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session');
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost/inseason');

var Produce = require('./models/produce.js');

var app = express();

var routes = require('./routes/index.js');

app.use(express.static(__dirname + '/public'));
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

app.use('/', routes);

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

var port = 3000;
app.listen(port, function(){
  console.log('making better eating habits at ' + port);
});

module.exports = app;
