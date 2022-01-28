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

