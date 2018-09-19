// ----- Lecture Example ------
let myBook = {   // myBook object with properties title, author, pageCount
    title: '1984', 
    author: 'George Orwell', 
    pageCount: 326
}

console.log (myBook) // { title: '1984', author: 'George Orwell', pageCount: 326 }

// read object properties using dot notation
console.log(`${myBook.title} by  ${myBook.author}`) // 1984 by  George Orwell

myBook.title = 'Animal Farm'  // reassigning object property title 

console.log(`${myBook.title} by  ${myBook.author}`) //Animal Farm by  George Orwell

//----- Challenge -----
/// Object with name, age, location
//// output:  Jose is 28 and lives in Nevada. 
///// Increase age by 1 and print message again

let person = {
    name: 'Jose', 
    age: 28, 
    location: 'Nevada'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age += 1 

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)