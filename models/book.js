// models/Book.js
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    url:{type: 'string', required: true},
    title: {type: 'string', required: true},
    author: {type: 'string', required: true},
    description: {type: 'string', required: true},
    rating: {type: 'number', required: true},
    pages: {type: 'number', required: true},
    language:{type:stringify, required:true},
    },
  {timestamps:true});
module.exports = mongoose.model('books', bookSchema);