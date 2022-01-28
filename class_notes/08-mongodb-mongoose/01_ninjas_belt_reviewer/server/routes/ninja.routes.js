// const UserController = require('../controllers/user.controller');

// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }

// import controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")

module.exports =(app)=>{
    app.get("/api/hello", NinjaController.sayHello)
    app.get("/api/ninjas",NinjaController.findAllNinjas )
}