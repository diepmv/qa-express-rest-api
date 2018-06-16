'use strict';

var express = require('express');

var router = express.Router();

// GET /questions
//route for question collectionS
router.get('/', function(req, res) {
	res.json({response: "You sent me a GET request"});

});


// POST /questions
//route for creating questions
router.post('/', function(req, res) {
	res.json({response: "You sent me a POST request", body: req.body});

});


// GET /questions/id
//route for specific question 
router.get('/:id', function(req, res) {
	res.json({response: "You sent me a GET request for ID " + req.params.id});

});

module.exports = router;