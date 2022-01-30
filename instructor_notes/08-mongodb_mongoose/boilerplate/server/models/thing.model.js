const mongoose = require('mongoose'); //import mongoose so that we can use mongoose to make a table
 

//the new mongoose.Schema({}) just allows us to write the instructions for what each ninja should have. The ID field is auto-generated so we don't need to include it here
const ThingSchema = new mongoose.Schema({
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


//Here we are creating a variable "Ninja" which is going to represent the name of our table (collection). 
const Thing = mongoose.model('Thing', ThingSchema); //mongoose is creating a table called "Ninja" using the instructions from "NinjaSchema"

module.exports = Thing;