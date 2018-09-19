// ----- Lecture Examples -----
let myBook = {   
    title: '1984', 
    author: 'George Orwell', 
    pageCount: 326
}

let otherBook = {   
    title: 'A Peoples History', 
    author: 'Howard Zinn', 
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`, 
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge 
// create function - take fahrenheir in - return object with all three

let ConvertFahrenheitToCelsius = function (temp){
   
    return {
        fahrenheit: temp, 
        celsius: (temp-32) * (5/9), 
        kelvin : (temp + 459.67)*(5/9)
    }
}

let firstConversion = ConvertFahrenheitToCelsius(32)
let secondConversion = ConvertFahrenheitToCelsius(74)

console.log(firstConversion)
console.log(secondConversion)
console.log(firstConversion.celsius)
console.log(firstConversion.kelvin)