const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    console.log("Attempting to load all pets!!!")

    Pet.find()
        .then(allPets => {
            res.json({ results: allPets })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem', error: err }))
}

module.exports.findOnePet = (req, res) => {
    console.log("Attempting to load one pet!!!")

    Pet.findOne({ _id: req.params.id })
        .then(singlePet => {
            res.json({ results: singlePet })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem', error: err }))
}

module.exports.createNewPet = (req, res) => {
    console.log("Attempting to create a new pet!!!")
    console.log("REQ.BODY--->", req.body)
    Pet.create(req.body) 
        .then(newlyCreatedPet => {
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem', error: err }))
}

module.exports.updatePet = (req, res) => {
    console.log("Attempting to update a pet!!!")

    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem', error: err }))
}

module.exports.deletePet = (req, res) => {
    console.log("Attempting to delete Pet!!!")

    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet => {
            res.json({ results: deletedPet })
        })
        .catch(err => res.json({ message: 'ERROR: There is a problem', error: err }))
}
