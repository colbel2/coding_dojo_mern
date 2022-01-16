
//spread is when you get the rest of the elements or properties from an array or object
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [epona, scoobyDoo, nemo, ...otherAnimals] = animals;

// console.log(otherAnimals)

const person = {
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

let {firstName:fname, lastName:last, ...Bobs_moreConfedentialInfo}= person

// console.log(Bobs_moreConfedentialInfo)




//this is NOT making a copy, it just creates a variable called "anothaOne" that references person and when anotherOne is updated, it updates person too since they are the same


// let anothaOne = person;

// console.log(anothaOne)
// console.log(person)



// anothaOne.firstName = "Bob Clone"
// console.log(anothaOne)
// console.log(person)





//using the spread operator to create an ACTUAL copy of something versus just referencing something with a varialble
let {...damianMarley} = person;

damianMarley.firstName = "Damian"

console.log(person)
console.log(damianMarley)


const animalss = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [...animalsCopy] = animalss


