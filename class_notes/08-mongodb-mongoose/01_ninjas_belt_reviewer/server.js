
const express = require('express'); // import express
const cors = require('cors')
const { json } = require('express');

const app = express(); //initializing express
const port = 8000; //specify port in variable

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//mongodb database connecting to mongoose
require("./server/config/config") // says all code from this file is now on this line



require("./server/routes/ninja.routes")(app)

app.listen( port, ()=> console.log(`Listening on port: ${port}`));

