let num = 103.941

console.log(num.toFixed(2))


console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max-min + 1)) + min //random number between 10 - 20

console.log(randomNum)

// Challenege
//1-5 - true if correct - false if not correct
let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min //random number between 1 - 5
   
    return guess == randomNum
} 

console.log(makeGuess(1))