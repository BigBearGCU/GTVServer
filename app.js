
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , testimony=require('./routes/testimony')
  , http = require('http')
  , path = require('path')
  ,mongoose = require('mongoose')
    ,repo=require('./repository');

//mongodb://GTVUser:gtvpass@ds037498.mongolab.com:37498/heroku_app17298301
var DB_URI="mongodb://GTVUser:gtvpass@ds037498.mongolab.com:37498/heroku_app17298301";
mongoose.connect(DB_URI,'PlatformGame');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/testimony',testimony.list);
app.get('/testimony/name/:name',testimony.getTestimonyByName);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

repo.populateWithTestData();
