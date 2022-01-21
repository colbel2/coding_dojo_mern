const express = require("express"); // require is a way to say import. This is one difference from front end to back end
const app = express(); // create a variable called app. this variable is an instance of express.
const port = 8000; // run API on port 8000 for this class and all demos


let quotes = [
    {content: "it is not the mountains ahead that will wear you out, it is the pebble in your shoe", author: "Muhammad Ali"}
    {content: "a wise man once said nothing at all", author: "wise man"}
    {content: "Comparison is the thief of joy", author: "Theodore Roosevelt"}
    {content: "America is built on speed, fast nasty speed", author: "Helen Keller"}
    {content: "Fall down 7 times, get up 8", author: "Japanese Proverb"}
]


// this is an api endpoint
app.get("/api/hello", (req,res)=>{
    res.json({msg:"hello express!!!"})
})











// this needs to below the other code blocks usually at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) ); // accepts a port number and a call backk function
