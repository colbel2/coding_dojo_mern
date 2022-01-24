const express = require("express") //import express



const app = express(); //initialize express
const port = 8000; //specify port in variable 



//connecting to our mongodb database using mongoose
require("./server/config/config")




//import the routes and pass the app object to the routes
require('./server/routes/ninja.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );