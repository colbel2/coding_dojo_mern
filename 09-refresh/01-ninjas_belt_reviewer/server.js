const express = require("express") //import express
const mongoose = require("mongoose") //import mongoose

const app = express(); //initialize express
const port = 8000; // specify port in a variable

app.get("/api/hello", (req, res)=>{
    res.json({msg: "Hello World!"})
} )



app.listen(port, () => console.log(`Listening on port: ${port}`));