const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet Name is required!"],
        minlength: [3, "Pet Name must be at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Pet Type is required!"],
        minlength: [3, "Pet Type must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description of pet is required!"],
        min: [3, "Description of pet must be at least 3!"]
    },
    skillsOne: {
        type: String
    },
    skillsTwo: {
        type: String
    },
    skillsThree: {
        type: String
    }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;