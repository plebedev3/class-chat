var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(1337, function(){
  console.log('listening on *:1337');
});

require('./app/routes.js')(app, http, io);

io.on('connection', function(socket){
  console.log('a user connected');
});
app.listen(1337);
