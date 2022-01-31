const mongoose = require('mongoose'); //import mongoose

const db_name = "ProductManager";

mongoose.connect(`mongodb+srv://root:root@projectmanager.owgvb.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

    