const Ninja = require('../models/ninja.model');

module.exports.sayHello = (req,res)=>{
    res.json({msg: "hello mongoose modularized!!"})
}

module.exports.findAll = (req, res) => {
    Ninja.find()
        .then(allNinjas  => {
            res.json({results: allNinjas})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findOne = (req, res) => {
    Ninja.findOne({_id: req.params.id})
        .then(oneNinja => {
            res.json({results: oneNinja})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createNewNinja = (req,res) => {
    Ninja.create(req.body)
        .then(newlyCreatedNinja => 
            res.json({results: newlyCreatedNinja}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.updateNinja = (req,res) => {
    Ninja.findByIdAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true})
        .then(updatedNinja => {
            res.json({results: updatedNinja})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deleteNinja = (req,res) => {
    Ninja.findByIdAndDelete({_id: req.params.id})
        .then(deletedNinja => {
            res.json({results:deletedNinja})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.findRandomNinja = (req,res) =>{
    console.log("trying to find random ninja")
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    Ninja.find()
        .then(allNinjas=>{
            let randomIndex= getRandomInt(allNinjas.length)
            res.json({results:allNinjas[randomIndex]})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}