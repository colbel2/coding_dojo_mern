const mongoose = require('mongoose');

const FitnessSchema = new mongoose.Schema({
    workoutName: {
        type: String,
        required: [true, "Name of workout needed! Arms, Back, Chest, etc.!!!"],
        minlength: [2, "Workout must be atleast 2 characters long!"]
    },
    excercise: {
        type: String,
        required: [true, "Exercise is required! Squats, Barbell Bench Press, etc.!!!"],
        minlength: [2, "Exercise must be atleast 2 characters long!"]
    },
    sets: {
        type: Number,
        required: [true, "Number of Sets is required!"],
        min_value: [1, "Must be atleast 1 Set"]
    },
    setOneReps: {
        type: Number,
        required: [true, "Reps required!"],
        min_value: [1, "Must be atleast one rep"]
    },
    setTwoReps: {
        type: Number
    },
    setThreeReps: {
        type: Number
    },
    setFourReps: {
        type: Number
    },
    setFiveReps: {
        type: Number
    },
    setSixReps: {
        type: Number
    },
    date: {
        type: String,
        format: Date
    },
    notes: {
        type: String,

    }
});

const Fitness = mongoose.model('Fitness', FitnessSchema);

module.exports = Fitness;