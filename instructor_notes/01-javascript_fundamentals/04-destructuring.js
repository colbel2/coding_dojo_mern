const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  createdAt: 1543945177623,
};

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];



// console.log(person.lastName)
//this is the old way--> still valid but theres a neater es6 way to do it
// let bobsLastName = person.lastName;
// let email = person.email;
// let username = person.username;

//here is the neater es6 way:
let {firstName:fname, lastName:bobsLastName, email, username} = person;
// console.log(fname, bobsLastName)


//old way of getting info from arrays
// let firstAnimal = animals[0]
// let secondAnimal = animals[1]
// let thirdAnimal = animals[2]

//es6 way of getting info from arrays
let [ , ,thirdAnimal, ,chickenGang] = animals


// console.log(firstAnimal)
// console.log(bestAnimalOfAlltime)
// console.log(thirdAnimal)
// console.log(chickenGang)



const animals2 = ['horse', 'dog', 'fish', 'cat', 'bird'];

[animals2[0],animals2[1]]=[animals2[1],animals2[0]]

// console.log(animals2)



const person2 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

let {addresses: [,{address:secondaddresObj}]} = person2

console.log(person2.addresses)

console.log(londonAddress)
  
