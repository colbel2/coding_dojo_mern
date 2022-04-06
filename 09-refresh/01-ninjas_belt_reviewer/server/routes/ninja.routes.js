// const UserController = require('../controllers/user.controller');

// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }

//import the controller file and give a variable name to reference
const NinjaController = require("../controllers/ninja.controller")

module.exports = app =>{
    app.get("/api/hello", NinjaController.sayHello)

    app.get("/api/allNinjas", NinjaController.findAll)

    app.get("/api/oneNinja/:id", NinjaController.findOne)

    app.post("/api/create/ninja", NinjaController.createNewNinja)

    app.put("/api/update/:id", NinjaController.updateNinja)

    app.delete("/api/ninja/:id", NinjaController.deleteNinja)

    app.get("/api/ninjas/random", NinjaController.findRandomNinja)
}