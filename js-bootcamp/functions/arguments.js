// Multipul arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0){
 return 'Name: ' + name + ' -Score: ' + score
}

let scorText = getScoreText(undefined, 99)

console.log(scorText)

/* ----- Challenge area -----
TipCalculcator
//Total, tipPercent .2 */

let calculateTip = function(total, tipPercent = .15 ){
return total * tipPercent
}

let bill = 8
let tip = calculateTip(bill)

console.log('$' + tip)

let total = bill+tip

console.log( 'Total plus tip: $' + total)

