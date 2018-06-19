'use strict';

var express = require("express");

var app = express();
var routes = require('./routes')
var logger = require('morgan');

var jsonParser = require('body-parser').json;

app.use(logger('dev'));

app.use(jsonParser());

app.use('/questions', routes);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('not found');
	err.status = 404;
	// call error handler and pass err as parameter
	next(err);
});


//Error handler
app.use(function(err, req, res, next){
	// if error object has status or 500
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Express server is listening on port", port);
});

