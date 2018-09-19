//Undefined for Variable
let name

console.log(name) // undefined 

name='Jen'

if (name === undefined){
console.log('Please provide a name')
}else{
    console.log(name) 
}

// Undefined for funtion argument
// Undefined as function return default value

let square = function(num){
    console.log(num) // undefined 
}

let result = square()

console.log(result) // undefined 

// Null as assined value

let age = 27

age= null

console.log(age) // null