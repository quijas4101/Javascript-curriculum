let name = '   Jose Quijas  '

//Length property

console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

let password = 'abc123password0089'

console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge 

///isValidPassword
////lenth is more than 8 - and it doesn't contain the word password
let isValidPassword = function(password){
return password.length >= 8 && !password.includes('password')
}


console.log(isValidPassword('asdfp'))  //false
console.log(isValidPassword('abc123!@#$%^&')) //true
console.log(isValidPassword('asdfpasdfpoijpassword'))  //false