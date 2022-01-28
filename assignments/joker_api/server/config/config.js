const mongoose = require('mongoose');

const db_name="Jokesdb";

mongoose.connect(`mongodb+srv://root:root@Jokesdb.owgvb.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));