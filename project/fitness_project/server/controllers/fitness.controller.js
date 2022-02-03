const Fitness = require('../models/fitness.model');

module.exports.findAllWorkouts = (req, res) => {
    console.log("Attempting to load all workouts!!!")

    Fitness.find()
        .then(allWorkouts => {
            res.json({ results: allWorkouts })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem, figure it out', error: err }))
}

module.exports.findOneWorkout = (req, res) => {
    console.log("Attempting to load one workout!!!")

    Fitness.findOne({ _id: req.params.id })
        .then(singleWorkout => {
            res.json({ results: singleWorkout })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem, figure it out', error: err }))
}

module.exports.createNewWorkout = (req, res) => {
    console.log("Attempting to create a new workout!!!")
    console.log("REQ.BODY--->", req.body)
    Fitness.create(req.body) 
        .then(newlyCreatedWorkout => {
            res.json({ results: newlyCreatedWorkout })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem, figure it out', error: err }))
}

module.exports.updateWorkout = (req, res) => {
    console.log("Attempting to update a workout!!!")

    Fitness.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedWorkout => {
            res.json({ results: updatedWorkout })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem, figure it out', error: err }))
}

module.exports.deleteWorkout = (req, res) => {
    console.log("Attempting to delete Workout!!!")

    Fitness.deleteOne({ _id: req.params.id })
        .then(deletedWorkout => {
            res.json({ results: deletedWorkout })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem, figure it out', error: err }))
}