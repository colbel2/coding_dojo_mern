//create a class using the class keyword
class Athlete{
    //constructor functions runs when a new athlete is created and this function will initialize the new athlete with the attributes defined in the constructor
    constructor(nameParam, speedParam){
        this.name = nameParam;
        this.energy = 100;
        this.speed = speedParam;
        this.strength = 75;
    }
    //functionalities an Athlete can perform goes here
    sayName(){
        console.log("My name is " + this.name);
    }

    playAGame(sportName, energySpent){
        if(energySpent<0){
            console.log(`we gon have to collect some samples for ${this.name}, this aint barry bonds`)
            return;
        }
        console.log(this.name + " is playing " + sportName);
        this.energy -= energySpent;

    }
}


//creating instances of the Athlete class below--> you can also refer to these as Athlete objects
let a1 = new Athlete("Jordan", 99)
let a2 = new Athlete("Serena", 85)
let a3 = new Athlete("Phelps", 80)


// console.log(a1.name)
// a1.name = "Michael Jordan GOAT"
// console.log(a1)
// console.log(a2)
// console.log(a3)

// console.log("a1 and a2 are playing some games/sports")
// a2.playAGame("Tennis", 30)
// a3.playAGame("Swimming", 50)

// console.log(a1)
// console.log(a2)
// console.log(a3)


/*
Inheritance -> We can create a sub class(es) that inherit from the Athlete class and are more specific with more specialized features and functionality
*/

class Swimmer extends Athlete{
    constructor(nameParam, lungCapacityParam, speedParam){
        super(nameParam, speedParam) //super is just calling the constructor of the parent class, so inside the () of super, put the arguments you would need to match the parameters in the parent class constructor

        //upgrades for the swimmer class below
        this.lungCapacity = lungCapacityParam;
    }

    swim(energySpent){
        console.log("SWIMMING IN THE OCEAN!!")
        this.energy-= energySpent;
    }
}

//creating an instance of a swimmer
let swimmer1 = new Swimmer("Michael Phelps",100,100)
let swimmer2 = new Swimmer("Kendrick Lamar",80,90)


console.log(swimmer1)
console.log(swimmer2)


// swimmer1.playAGame("Swim", 20)
swimmer1.swim(30)





class BasketballPlayer extends Athlete{
    constructor(nameParam, verticalJumpParam, speedParam){
        super(nameParam, speedParam) //super is just calling the constructor of the parent class, so inside the () of super, put the arguments you would need to match the parameters in the parent class constructor

        //upgrades for the swimmer class below
        this.verticalJumpHeight = verticalJumpParam;
    }

    dunkBall(energySpent){
        console.log("Sports Center top ten dunk of the year!!")
        this.energy-= energySpent;
    }
}


let b1 = new BasketballPlayer("Lebron James", 50,95 )

console.log(b1)





