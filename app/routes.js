path = require('path');
module.exports = function (app, http, io) {
  app.get('/', function (req, res) {
        res.send('Welcome to our first webpage');
    });
    app.get('/chat', function(req,res) {
      res.sendFile(path.join(__dirname + "/../chatWindow.html"));
    });
    app.get("/socket.io/socket.io.js", function(req,res) {
      res.sendFile(path.join(__dirname + "/../socket.io.js"))
    });
};
