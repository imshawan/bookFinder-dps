var express = require('express');
var router = express.Router();
var bookController = require('../controllers/mongo')

/* GET home books. */
router.get('/books', bookController.getBooks);

router.post('/findBooks', function(req, res, next) {
  
});

router.post('/addBooks', function(req, res, next) {
  
});

module.exports = router;
