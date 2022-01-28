// const faker = require('@faker-js/faker');
// const express = require("express");
// const app = express();
// const port = 8000;


// class User{
//     constructor(){
//         this._id= faker.datatype.uuid();
//         this.firstName = faker.name.firstName();
//         // this._id = faker.datatype.uuid();
//         // this.firstName = faker.name.firstName();
//         // this.lastName = faker.name.lastName();
//         // this.phoneNumber = faker.phone.phoneNumber();
//         // this.email = faker.internet.email;
//         // this.password = faker.internet.password;
//     }
// }

// class Company{
//     constructor(){
//         this._id = faker.datatype.uuid();
//         this.name = faker.company.companyName();
//         this.address = faker.address.streetAddress.city.state.zipCode.country;

//     }
// }
// //route
// app.get("/api/users/new", (req,res)=>{
//     let newUser = new User()
    
//     res.json({result:newUser})
// })





// app.listen( port, () => console.log(`Listening on port: ${port}`) );
const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


class User{
    constructor(){
        this._id= faker.datatype.uuid();
        this.firstName = faker.name.firstName();
    }
}


//route
app.get("/api/users/new", (req,res)=>{
    let newUser = new User()

    res.json({result:newUser})
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );