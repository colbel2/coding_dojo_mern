
const express = require('express'); // import express
const { json } = require('express');

const app = express(); //initializing express
const port = 8000; //specify port in variable

//mongodb database connecting to mongoose
require("./server/config/config") // says all code from this file is now on this line


//route to hello world to test connection
// app.get("/api/hello", (req,res)=>{
//     res.json({msg: "Hello mongoose world"})
// })

require("./server/routes/ninja.routes")(app)

app.listen( port, ()=> console.log(`Listening on port: ${port}`));

