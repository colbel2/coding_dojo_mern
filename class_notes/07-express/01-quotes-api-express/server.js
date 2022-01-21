const express = require("express"); // require is a way to say import. This is one difference from front end to back end
const app = express(); // create a variable called app. this variable is an instance of express.
const port = 8000; // run API on port 8000 for this class and all demos















// this needs to below the other code blocks usually at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) ); // accepts a port number and a call backk function
