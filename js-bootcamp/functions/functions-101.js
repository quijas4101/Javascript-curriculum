/*----- Leacture Practice -----
// Funtions - input (argument), code, output (return value)

let greetUser = function() {
console.log('Welcome User!')
} 

greetUser() 


let square = function(num) {
    let result = num * num
    return result  
}


let value = square(3)
let otherValue =  square(10)

console.log(value)
console.log(otherValue) */

/* Challenge 

//ConvertFahrenheitToCelsius

///call a couple of times (32 -> 0) (68 -> 20)

// print the converted values */

let ConvertFahrenheitToCelsius = function (fahrenhiet){
    let celsius = (fahrenhiet-32) * 5/9
    return celsius
}

let firstConversion = ConvertFahrenheitToCelsius(32)
let secondConversion = ConvertFahrenheitToCelsius(68)

console.log(firstConversion)
console.log(secondConversion)
