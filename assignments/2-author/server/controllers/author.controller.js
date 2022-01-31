//The controller needs to be able to talk to the model (the code that represents the DB table)
const Author = require('../models/author.model');

module.exports.sayHello = (req, res) => {
    res.json({ msg: "hello mongoose modularized!!" })
}

module.exports.findAllAuthors = (req, res) => {
    console.log("trying to find all authors!")

    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneAuthor = (req, res) => {
    console.log("trying to find one Author!")

    Author.findOne({ _id: req.params.id })
        .then(singleAuthor => {
            res.json({ results: singleAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewAuthor = (req, res) => {
    console.log("trying to create Author!")
    console.log("REQ.BODY--->", req.body)
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ results: newlyCreatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateAuthor = (req, res) => {
    console.log("trying to update a Author!")

    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteAuthor = (req, res) => {
    console.log("trying to delete Author!")

    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findRandomAuthor = (req, res) => {
    console.log("trying to find a random Author!")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Author.find()
        .then(allAuthors => {
            let randomIndex = getRandomInt(allAuthors.length)
            res.json({ results: allAuthors[randomIndex] })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}
