const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table

const NinjaSchema = new mongoose.Schema({
    // firstName: String, this is the simple way. we can also make it with types for validation purposes
    firstName: {
        type: String,
        required: [true, "First Name is Required!"],
        minlength: [2, 'First name must be atleast 2 characters']
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required!"],
        minlength: [2, 'Last name must be atleast 2 characters']
    },
    isVeteran: {
        type: Boolean
    },
    numBelts: {
        type: Number,
        required: [true, "Number of belts is required!"],
        min: [0, "Must be atleast 0."]
    }
});

const Ninja = mongoose.model('Ninja', NinjaSchema);

module.exports = Ninja;