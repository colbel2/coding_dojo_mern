const express = require("express"); // require is another way of saying import. this is how you import a file or package. In the backend it is called require. const puts the express module in a variable called express so we can use it
const app = express(); // create a variable called app. this variable is an instance of express. it has a bunch of functionalities we can use
const port = 8000; //sets port to 8000, do not set to 3000. Really no reason to change for class. 8000 and 5000 are the most common to use for backend. you could do 8001, 8002 etc. 

//both these lines are used to read and extract information from post request
app.use(express.json()) //do this to convert information to json
app.use(express.urlencoded({extended: true})) //this lets us read form informataion. postman emulates a form for us

let quotes = [ // lets quotes equal an array
    {content: "It is not the mountains that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"}, // each quote object can have information stored
    {content: "A wise man once said nothing at all", author:"unkown"},
    {content: "Comparison is the thief of joy", author: "Theodore Roosevelt"},
    {content: "Fall down 7 times to stand up 8", author: "Japanese Proverb"},
    {content: "Wherver you go, there you are", author: "Eckhart Tolle"}
]

//this is an api endpoint
app.get("/api/hello", (req,res)=>{
    res.json({msg:"hello express"}) //respond with json and return an object
}) //accepts a route and a function. we will use an arrow function with 2 parameters. req and res. it could be named anything but the first word is a request and the 2nd is a response. common practice is req,res

//get all quotes
app.get("/api/quotes", (req,res)=>[
    res.json({count: quotes.length,results: quotes}) // respond with json and return count and results
])

// get one quote by "ID"
// app.get("/api/quotes/1", (req,res)=>{ // this example is "hard coded" we actually want to implement a variable so that no matter what number is used it will respond correctly without us typing everything out
app.get("/api/quotes/:idx",(req,res)=>{ // this is using :idx to call on the correct information
    res.json({results: quotes[req.params.idx]}) // req is called to call the req from before. params lets you access any variable in the route. idx is the only variable so it is called on
})

//add a new quote
app.post("/api/quotes",(req,res)=>{
    console.log("req.body", req.body)
    quotes.push(req.body) //pushes form information into quotes array
    res.json({count: quotes.length,results: quotes})
})

//update a quote
app.put("/api/quotes",(req,res)=>{
    
})

//delete a quote
app.delete("/api/quotes", (req,res)=>{

})
// this needs to below the other code blocks. put at the very end of the file.
app.listen( port, () => console.log(`Listening on port: ${port}`) ); //listens for a port number(port) and accepts a function. this function is called a call back function. The call back function is currently an arrow function that gives a console . log with a message so we know its working
