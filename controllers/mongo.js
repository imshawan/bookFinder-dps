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

exports.addBooks = (req, res, next) => {
    Books.findOne({title: req.body.title}, (err, book) => {
        if (book) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, message: "Book entry already exists! You cannot enter duplicate values.", book: book});
        }
        else {
            Books.create(req.body)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, message: "Book information was saved successfully.", book: book});

            }, err => {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false, message: "Something went wrong, please try again.", error: err});
            })
        }
    })
}

exports.findBooks = (req, res, next) => {
    Books.find({ tags: req.body.tags }, (err, books) => {
        if (err) {
            next(err)
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true, books: books});
        }
    })
}