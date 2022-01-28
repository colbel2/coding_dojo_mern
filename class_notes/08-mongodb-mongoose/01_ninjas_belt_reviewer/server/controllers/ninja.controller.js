//controller needs to talk to models
const Ninja = require('../models/ninja.model');

module.exports.sayHello = (req,res)=>{
    res.json({msg: "hello mongoose modularized!!"})
}

module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })        
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })//the id in req.params.id on controller file must match whatever is on the routes file for the route variable /:id
        .then(oneNinja => res.json({ results: oneNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewNinja = (req, res) => {
    console.log("REQ.body===>",req.body)
    Ninja.create(req.body)
        .then(newlyCreatedNinja => res.json({ results: newlyCreatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNinja => res.json({ results: updatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteNinja = (req,res)=>{
    console.log("trying to delete ninja!")

    Ninja.deleteOne({_id: req.params.id})
        .then(deletedNinja =>{
            res.json({results: deletedNinja})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findRandomNinja = (req,res)=>{
    console.log("trying to find a random ninja!")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    //get all the ninjas first, and pick a random index from that array
    Ninja.find()
        .then(allNinjas=>{
            let randomIndex = getRandomInt(allNinjas.length)
            res.json({results: allNinjas[randomIndex]})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


