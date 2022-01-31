const mongoose = require('mongoose'); 


const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [2, "First name must be at least 2 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"]
    }
});


const Author = mongoose.model('Author', AuthorSchema); 

module.exports = Author;