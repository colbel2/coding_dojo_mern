const mongoose = require('mongoose');


const ProjectManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be at least 2 characters!"]
    },
    price: {
        type: String,
        required: [true, "Price is required!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
    }
});


const ProjectManager = mongoose.model('ProjectManager', ProjectManagerSchema);

module.exports = ProjectManager;