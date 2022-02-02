const mongoose = require('mongoose');

const db_name = "fitnessdb";

mongoose.connect(`mongodb+srv://root:root@fitnessdb.owgvb.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection has been established to the database!'))
    .catch(err => console.log('The connection to the database was unable to be made ', err));


