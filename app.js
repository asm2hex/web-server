var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
  res.send('Hello from Express!!');
});*/

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('Private route hit!');
    next();
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port: ' + port);
});