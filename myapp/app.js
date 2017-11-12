var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var expressSession = require('express-session');
var index = require('./routes/index');
var _passport= require('./config/passport/passport');
//var port     = process.env.PORT || 8080;
var env = require('dotenv').load();

var models=require("./models");

var app = express();

// view engine setup

 app.set('views', 'views')
 app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new LocalStrategy(


  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));






app.use(expressSession({secret: 'mySecretKey'}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var flash = require('connect-flash');
app.use(flash());

//app.use(_passport);
app.use(index);



models.sequelize.sync().then(function(){
  console.log("ok");  
}).catch(function(err){
  console.log(err,"There was an error");
});


// var authRoute = require('./routes/index.js')(app,passport);
///require('./config/passport/passport.js');

app.listen(8080, function(err) {
 
    if (!err)
        console.log("Site is live");
    else
     console.log(err)
 
});


module.exports = app;