var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        default: '',
    },
    author: {
        type: String,
        default: '',
    },
    pub_date: {
        type: string,
        default: ''
    },
    tags: {
        type: Array,
        default: []
    }
},{
    timestamps: true
});

var Books = mongoose.model('Book', bookSchema);
module.exports = Books;