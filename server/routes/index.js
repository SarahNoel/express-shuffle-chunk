var express = require('express');
var router = express.Router();
var utilities = require('../utility/utility.js');

var groupFinal;
var groupTotal;
var numGroups;
var shuffleArray;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle Chunk'});
});

router.post('/submit', function(req, res){
  groupTotal = req.body.totalNum.split(",");
  numGroups = req.body.groupNum;
  shuffleArray = utilities.shuffle(groupTotal);
  groupFinal = utilities.chunk(shuffleArray, numGroups);
  res.redirect('/chunked');
});

router.get('/chunked', function(req, res){
 res.render('chunked', { title: 'Shuffled Groups', groupFinal:groupFinal});
});

router.post('/submit2', function(req, res){
  res.redirect('/');
});


module.exports = router;
