const FitnessController = require("../controllers/fitness.controller")

module.exports = (app)=>{

    app.get("/api/fitness", FitnessController.findAllWorkouts) // place holder...home page,

    app.post("/api/fitness", FitnessController.createNewWorkout)

    app.get("/api/fitness/:id", FitnessController.findOneWorkout)

    app.put("/api/fitness/:id", FitnessController.updateWorkout)
    
    app.delete("/api/fitness/:id", FitnessController.deleteWorkout)
}