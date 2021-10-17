var express = require('express');
var router = express.Router();
var bookController = require('../controllers/mongo')

/* GET home books. */
router.get('/books', bookController.getBooks);

router.post('/findBooks');

router.post('/addBooks', bookController.addBooks);

module.exports = router;
