var express = require ('express');
var app = express();
var port = process.env.PORT || 8080;
require('./app/routes.js')(app);
app.listen(port);
