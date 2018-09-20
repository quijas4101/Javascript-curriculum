//avoid var not common in new js

//var firstName = 'Jose'
//firstName = 'Pedro'

//let and const are block scope variables. var is function scope variable 
/*
const setName = function() {
var firstName = 'Jose'
}

if(10 == 10){
    var firstName = 'Zac'
}

if (11 == 11){
    let firstName='Pedro'
}

setName()
console.log(firstName) */

let age 
console.log(age) // undefined

var agee
console.log(agee) // undefined

console.log(name) // undefined
var name = 10  //decloration of var gets hoisted to the top
 
console.log(name2) // ReferenceError: name2 is not defined
let name2