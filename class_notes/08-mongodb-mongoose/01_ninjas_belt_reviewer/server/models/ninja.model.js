const mongoose = require('mongoose'); // import mongoose so we can make a table



const NinjaSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"], // you can implement validations here
        minlength: [2, "First name must be atleast 2 characters!"]},
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [2, "Last name must be atleast 2 characters!"]},
    numBelts: {
        type: Number,
        required: [true, "Number of belts is required!"],
        min: [0, "Number of belts must be atleast 0"]},
    isVeteran: { // did not use any validation on this 
        type: Boolean}
});


// creating variable Ninja which is going to represent the name of our table(collection)
const Ninja = mongoose.model('Ninja', NinjaSchema); //mongoose is creating a table called Ninja using the instruction from NinjaSchema



module.exports = Ninja;