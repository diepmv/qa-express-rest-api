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
router.get('/:qID', function(req, res) {
	res.json({response: "You sent me a GET request for ID " + req.params.qID});

});




// POST /questions/:id/answers
//route for creating answer
router.post('/:qID/answers', function(req, res) {
	res.json({response: "You sent me a POST request to /answer", body: req.body, 
			  questionId : req.params.qID
			});
});



// PUT /questions/:id/answers/:id
//route for updating answer
router.put('/:qID/answers/:aID', function(req, res) {
	res.json({response: "You sent me a PUT request to /answer", body: req.body, 
			  questionID : req.params.qID,
			  answerID : req.params.aID
			});
});



// DELETE /questions/:id/answers/:id
//route for deleting specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
	res.json({response: "You sent me a DELETE request to /answer",
			  questionID : req.params.qID,
			  answerID : req.params.aID
			});
});




// POST /questions/:id/answers/:id/vote-up
// POST /questions/:id/answers/:id/vote-down
//vote on specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res) {

	res.json({response: "You sent me a POST request to /answer/:aID/vote-" + req.params.dir,
			  questionID : req.params.qID,
			  answerID : req.params.aID,
			  vote : req.params.dir
			});
});


module.exports = router;