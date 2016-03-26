var express = require('express');
var app = express();
var middleware = require('./middleware');

/*app.get('/', function (req, res) {
  res.send('Hello from Express!!');
});*/


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port: ' + port);
});