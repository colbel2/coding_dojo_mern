console.log(magicalUnicorns);


var magicalUnicorns = "awesome";


var foo = "bar";
magic();

function magic(){
    console.log('loogging the undefined foo which mr.T pities',foo);
    var foo = "hello world";
}

console.log(foo);


/*
var magicalUnicorns;
var foo;

function magic(){
    var foo;
    console.log(foo);
    foo = "hello world";
}

magic()
magicalUnicorns = "awesome"
foo = "bar"

magic()
console.log(foo)
*/