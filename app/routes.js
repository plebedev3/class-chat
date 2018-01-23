module.exports = function (app) {
  app.get('/', function (req, res) {
        res.send('Welcome to our first webpage');
    });
};
