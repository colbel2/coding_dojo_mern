
const Product = require('../models/model');


module.exports.findAllProducts = (req, res) => {
    console.log("trying to find all products!")

    Product.find()
        .then(allProducts => {
            res.json({ results: allProducts })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneProduct = (req, res) => {
    console.log("trying to find one product!")

    Product.findOne({ _id: req.params.id })
        .then(singleProduct => {
            res.json({ results: singleProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewProduct = (req, res) => {
    console.log("trying to create new product!")
    console.log("REQ.BODY--->", req.body)
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ results: newlyCreatedProduct })
        })
        //if theres validation errors
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateProduct = (req, res) => {
    console.log("trying to update a product!")

    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteProduct = (req, res) => {
    console.log("trying to delete a product!")

    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

