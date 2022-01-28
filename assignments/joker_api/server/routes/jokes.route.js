const JokesController = require("../controllers/jokes.controller")

module.exports =(app)=>{
    app.get("/api/jokes",JokesController.findAllJokes)
    // app.get("/api/ninjas/:id",NinjaController.findOneNinja) //the id in req.params.id on controller file must match whatever is on the routes file for the route variable /:id
    // app.post("/api/create", NinjaController.createNewNinja)
    // app.put("/api/ninjas/:id",NinjaController.updateExistingNinja)
    // app.delete("/api/ninjas/:id",NinjaController.deleteNinja)
}