exports.validateBooks = (req, res, next) => {
    if (!req.body.title){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, message: "Title cannot be empty"});
    }
    else if (!req.body.author){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, message: "Author cannot be empty"});
    }
    else if (!req.body.pub_date){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, message: "pub_date cannot be empty"});
    }
    else if (!req.body.tags){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, message: "Atlease one tag is required"});
    }
    else {
        next();
    }
}