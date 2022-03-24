const mongoose = require("mongoose") //import mongoose

//connecting to our mongodb database using mongoose
mongoose.connect('mongodb+srv://root:root@fitnessdb.owgvb.mongodb.net/ninjasdb?retryWrites=true&w=majority', { //('mongodb+srv://root:root@fitnessdb.owgvb.mongodb.net/ninjasdb?retryWrites=true&w=majority' the second root is the password I set up on database website...ninjasdb is the name i give my database
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));