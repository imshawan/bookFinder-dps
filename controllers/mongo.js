const Books = require('../schemas/book');

exports.getBooks = (req, res, next) => {
    Books.find({}, (err, books) => {
        if (err){
            next(err)
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content_type', 'application/json');
            res.json(books);
        }
    })
}