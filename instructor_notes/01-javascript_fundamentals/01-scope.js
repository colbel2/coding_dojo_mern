//global scope- anything thats not in a loop or a function is globally scoped-meaning that functions and loops can see it
var beatles = ['Paul', 'George', 'John', 'Ringo'];


//functions create a functional scope
function showMeBeatlesNames(){
    console.log(beatles)
    //a variable that is created/defined inside of a function is functionally scoped, meaning only the function that owns this variable can access/see it
    var bestPlayerOfAlltime = "Lebron James"

    for(let i = 0; i<10; i++){
        console.log(i)
    }

    // console.log("logging I outside the for loop-->", i)

}

//if statement creates a block scope
if(1 ===1 ){
    let flag = "yes, 1 is one. One."
}

// console.log(flag)


// console.log(bestPlayerOfAlltime)
showMeBeatlesNames()

let flag2;
if(2 ===2 ){
    flag2 = "yes, 2 is two. Two chainz."
}

console.log(flag2)



/*
1. global scope- anything thats not in a loop or a function is globally scoped-meaning that functions and loops can see it
2. Functional scope- a ariable that is created/defined inside of a function is functionally scoped, meaning only the function that owns this variable can access/see it
3. Block scoped- anything within curly braces from things like for loops and conditionals


*/



//const example--benefit of using const is if you want a certain variable to stay the same. However, there is a caveat: you can push to or append to the end of an array or string declared using const

const topFrameworks = ['React', 'JQuery', 'Angular']

console.log(topFrameworks)

topFrameworks = ['React', 'Vue']

console.log(topFrameworks)

