const mongoose = require('mongoose'); // import mongoose so we can make a table



const JokesSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, "Setup is required!"], // you can implement validations here
        minlength: [10, "Setup must be atleast 2 characters!"]},
    punchLine: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be atleast 3 characters!"]}
});


// creating variable Ninja which is going to represent the name of our table(collection)
const Jokes = mongoose.model('Jokes', JokesSchema); //mongoose is creating a table called Ninja using the instruction from NinjaSchema



module.exports = Jokes;