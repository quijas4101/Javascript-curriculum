//Global scope (ConvertFahrenheitToCelsius, firstConversion, secondConversion)
    /// Local scope (fahrenhiet, celsius)
        //// Local scope (isFreezing)

let ConvertFahrenheitToCelsius = function (fahrenhiet){
    let celsius = (fahrenhiet-32) * 5/9

    if (celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

let firstConversion = ConvertFahrenheitToCelsius(32)
let secondConversion = ConvertFahrenheitToCelsius(68)

console.log(firstConversion)
console.log(secondConversion)
