const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


class User{
    constructor(){
        this._id= faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
    }
}

let user1 = new User()
console.log("user 1-->", user1)




//route
app.get("/api/users/new", (req,res)=>{
    let newUser = new User() //create a new user with auto generated fake data

    res.json({result:newUser})
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );