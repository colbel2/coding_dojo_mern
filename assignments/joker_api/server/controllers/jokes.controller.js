const Jokes = require('../models/jokes.model');

module.exports.sayHello = (req,res)=>{
    res.json({msg: "hello mongoose modularized!!"})
}

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })        
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })//the id in req.params.id on controller file must match whatever is on the routes file for the route variable /:id
        .then(oneJoke => res.json({ results: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewJoke = (req, res) => {
    console.log("REQ.body===>",req.body)
    Jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ results: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ results: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ results: deleteJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}