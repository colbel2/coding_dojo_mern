const mongoose = require('mongoose');

const FitnessSchema = new mongoose.Schema({
    workoutName: {
        type: String,
        required: [true, "Name of workout needed! Arms, Back, Chest, etc.!!!"],
        minlength: [2, "Workout must be atleast 2 characters long!"]
    },
    exercise: {
        type: String,
        required: [true, "Exercise is required! Squats, Barbell Bench Press, etc.!!!"],
        minlength: [2, "Exercise must be atleast 2 characters long!"]
    },
    sets: {
        type: Number,
        required: [true, "Number of Sets is required!"],
        min_value: [1, "Must be atleast 1 Set"]
    },
    setOneWeight: {
        type: Number // not required because some exercises do not require weight
    },
    setOneReps: {
        type: Number,
        required: [true, "Reps required!"],
        min_value: [1, "Must be atleast one rep"]
    },
    setTwoWeight: {
        type: Number // not required because some exercises do not require weight
    },
    setTwoReps: {
        type: Number
    },
    setThreeWeight: {
        type: Number // not required because some exercises do not require weight
    },
    setThreeReps: {
        type: Number
    },
    setFourWeight: {
        type: Number // not required because some exercises do not require weight
    },
    setFourReps: {
        type: Number
    },
    setFiveWeight: {
        type: Number // not required because some exercises do not require weight
    },
    setFiveReps: {
        type: Number
    },
    setSixWeight: {
        type: Number // not required because some exercises do not require weight
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