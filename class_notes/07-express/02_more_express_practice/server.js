const express = require("express"); // require is another way of saying import. this is how you import a file or package. In the backend it is called require. const puts the express module in a variable called express so we can use it
const app = express(); // create a variable called app. this variable is an instance of express. it has a bunch of functionalities we can use
const port = 8000; //sets port to 8000, do not set to 3000. Really no reason to change for class. 8000 and 5000 are the most common to use for backend. you could do 8001, 8002 etc. 











// this needs to below the other code blocks. put at the very end of the file.
app.listen( port, () => console.log(`Listening on port: ${port}`) ); //listens for a port number(port) and accepts a function. this function is called a call back function. The call back function is currently an arrow function that gives a console . log with a message so we know its working
