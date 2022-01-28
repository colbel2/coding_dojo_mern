const mongoose = require('mongoose'); //import mongoose
const express = require('express'); // import express
const { json } = require('express');

const app = express(); //initializing express
const port = 8000; //specify port in variable

app.get("/api/hello", (req,res)=>{
    res.json({msg: "Hello mongoose world"})
})


app.listen( port, ()=> console.log(`Listening on port: ${port}`));