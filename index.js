var app = require('express')();

/**
 * Global path
 */
app.get('/', function (req, res) {
    res.send('Welcome to node calculator');
});

/**
 * Add function
 */
app.get('/add', function (req, res) {
	try {
		res.send((parseInt(req.query.a) + parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

/**
 * Substraction function
 */
app.get('/sub', function (req, res) {
    try {
		res.send((parseInt(req.query.a) - parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

/**
 * Multiplication function
 */
app.get('/mul', function (req, res) {
    try {
		res.send((parseInt(req.query.a) * parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

/**
 * Division function
 */
app.get('/div', function (req, res) {
    try {
		res.send((parseInt(req.query.a) / parseInt(req.query.b)).toString());	
	} catch (error) {
		res.send(error);
	}
});

/**
 * Listening function
 */
app.listen(3000, function () {
    console.log('Application started on port 3000');
});