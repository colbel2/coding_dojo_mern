//import the controller file and give it a variable name to reference
const ThingController = require("../controllers/thing.controller")



//these are your backend routes---AKA api endpoints
module.exports = (app)=>{
    app.get("/api/hello", ThingController.sayHello)
    //more routes here

    //to get all of something
    app.get("/api/things", ThingController.findAllThings)


    //to create something new
    app.post("/api/things", ThingController.createNewThing)


    //get one of something
    app.get("/api/things/:id", ThingController.findOneThing)

    //update one of something
    app.put("/api/things/:id", ThingController.updateThing)
    
    //delete one of something
    app.delete("/api/things/:id", ThingController.deleteThing)
    
    
    

}