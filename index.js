var app = require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/add', function (req, res) {
  res.send(req.query.a + req.query.b);
});

