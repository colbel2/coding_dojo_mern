//The controller needs to be able to talk to the model (the code that represents the DB table)
const Thing = require('../models/thing.model');

module.exports.sayHello = (req,res)=>{
    res.json({msg: "hello mongoose modularized!!"})
}

module.exports.findAllThings = (req, res) => {

    Thing.find()
        .then(allthings=>{
           res.json({results: allthings}) 
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneThing = (req, res) => {
    Thing.findOne({_id: req.params.id})
        .then(singleThing =>{
           res.json({results: singleThing}) 
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewThing = (req, res) => {

    Thing.create(req.body) //req.body represents the form info
        .then(newlyCreatedThing =>{
            res.json({results: newlyCreatedThing})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateThing = (req,res)=>{
    console.log("trying to update a ninja!")

    Thing.findOneAndUpdate(
        {_id: req.params.id}, //which ninja to update by _id
         req.body, //form info
         { new: true, runValidators: true } //return back teh newly updated ninja info
         )
        .then(updatedThing=>{
            res.json({results: updatedThing})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteThing = (req,res)=>{

    Thing.deleteOne({_id: req.params.id})
        .then(deletedThing =>{
            res.json({results: deletedThing})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}
