let name = 'Roberto'
let age = 7

console.log(`Hey, my name is ${name}! I am ${age}`)

let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' -Score: ' + score
   }
   
   let scorText = getScoreText(undefined, 99)
   
   console.log(scorText)


   /* ----- Challenge area -----
TipCalculcator
//Total, tipPercent .2 
// A 25% tip of $40 would be $10. Your Total would be $50.*/


let calculateTip = function(total, tipPercent = 20){
    let covertDecimal = tipPercent / 100
    let tip = total * covertDecimal
    let newTotal = total + tip

    return `A ${tipPercent}% tip of $${total} would be $${tip}. Your Total with tip is $${newTotal}.`
    //return total * tipPercent
    }
    
    let bill = 35
    let tip = 15
    let message = calculateTip(bill, tip)
    
  console.log(message)
    
  //  let total = bill+tip
    
  //  console.log( 'Total plus tip: $' + total)