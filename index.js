var app = require('express')();

/**
 * 
 */
app.get('/', function (req, res) {
    res.send('Welcome to node calculator');
});

app.get('/add', function (req, res) {
	try {
		res.send((parseInt(req.query.a) + parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

app.get('/sub', function (req, res) {
    try {
		res.send((parseInt(req.query.a) - parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

app.get('/mul', function (req, res) {
    try {
		res.send((parseInt(req.query.a) * parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

app.get('/div', function (req, res) {
    try {
		res.send((parseInt(req.query.a) / parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});