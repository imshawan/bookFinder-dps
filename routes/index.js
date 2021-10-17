var express = require('express');
var router = express.Router();
var bookController = require('../controllers/mongo');
var validateBooks = require('../validators/bookValidator').validateBooks;

/* GET home books. */
router.get('/books', bookController.getBooks);

router.post('/findBooks', bookController.findBooks);

router.post('/addBooks', validateBooks, bookController.addBooks);

module.exports = router;
