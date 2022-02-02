const express = require("express")
const cors = require("cors")
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(cors()) 

require("./server/config/config")
// require('./server/routes/exam.route')(app) // this is not included only during testing of server connection

app.listen( port, () => console.log(`Listening on port: ${port}`) );