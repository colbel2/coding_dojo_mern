//function the generic way
function sayHello1(name){
    console.log("hello " + name)
}
// sayHello1("Nichole")


// sayHello('Nichole')
// sayHello('Sarah')
// sayHello('Drake')

//function using a variable
const sayHello2 = function(name, numberOfProjects) {
    console.log('Hello ' + name);
};


//arrow function
const sayHello3 = (name, numberOfProjects)=> {
 return `Hi my name is ${name} and I have ${numberOfProjects} projects`
}
    


console.log(sayHello3("Allen", 3))




  
  