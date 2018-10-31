// primitive value: streing, number, buoolean, null undefined

//object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//function: myFunc --> Function.prototype --> Object.prototype --> null

const product = 'Computer'

console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)
