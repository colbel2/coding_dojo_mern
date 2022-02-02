const express = require("express"); //import express- to run a web api (app.get, app.post, ...etc;)
const cors = require("cors");//importing cors (cross origin resource sharing) which allows us to share our api info with our react application on the front end


const socketio = require('socket.io');//import socket.io
const app = express(); //initialize express
const port = 8000; //specify port in variable 


//need these two lines below to be able to read and extract the information received from post, put, and patch requests
app.use(express.json());
app.use(express.urlencoded({extended:true})); //be able to read form information


app.use(cors()); //have the app be able to use "cross-origin-resource-sharing" features





//connecting to our mongodb database using mongoose
require("./server/config/config");




//import the routes and pass the app object to the routes
require('./server/routes/ninja.routes')(app);


//telling the app to listen for any request on port 8000
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );


//socket.io stuff below

let connectedClients = 0;


//initialize a websocket object that gives us websocket functionality by using socketio and passing it our express server
const io = socketio(server,{
    cors:{
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: ["*"]
    }
})


//whenever a client connects to our app, this io.on("connection") listener will get triggered
io.on("connection", socket=>{

    connectedClients++
    console.log(`New client has joined us. We now have ${connectedClients} connected. Here is this particular clients socket id: ${socket.id}`);
    // socket.broadcast.emit("new_connection", {msg: "someone new has joined us!"}) //send a message to all the connected clients. 


    //when the socket received an alert about the new ninja being added from the client we will be in this socket.on(added_new_ninja) listener
    socket.on("added_new_ninja", ninjaInfo =>{
        console.log("received ninja info", ninjaInfo)

        //when the server is aware that a new ninja got added, the server will send a message to all the other connected clients that new ninja got added so that the other clients can update their DOM with this new ninja in real time. To do this we will use socket.broadcast.emit to the all_ninjas component so that component knows to update the list of all ninjas
        socket.broadcast.emit("update_list_of_ninjas",ninjaInfo )

        
    })



})
