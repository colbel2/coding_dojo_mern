const mongoose = require('mongoose'); //import mongoose

const db_name = "ninjasdb";

mongoose.connect(`mongodb+srv://root:root@ninjasdb.owgvb.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

    // mongodb+srv://root:<password>@ninjasdb.owgvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority