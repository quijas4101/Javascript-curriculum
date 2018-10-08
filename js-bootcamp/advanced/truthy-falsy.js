const products = [{name: 'Computer mouse'}] 
const product = products[0]

//Truthy - Values that result to true in boolean context
//Falsy - Values that result to false in boolean context
//Falsy values - false, 0, enpty string, null, undefinedm, NaN

if (product){
    console.log('Product found!')
}else{
    console.log('Product not found.')
}