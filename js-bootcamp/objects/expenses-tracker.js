let myAccount = {
    name:'Jose Quijas', 
    expenses: 0, 
    income:0
}

//let otherAccount = myAccount
//otherAccount.income = 1000

let addExpense = function(account,amount){
    account.expenses= account.expenses + amount
   
}

//addIncome function
let addIncome = function(account,amount){
    account.income = account.income + amount
}

//resetAccount function
let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

//getAccountSummary funtion
//Account for Jose has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account){
    let balance = account.income-account.expenses
console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}

//add income
addIncome(myAccount, 2000)

//add expense
addExpense(myAccount,2.5)

//add expense
addExpense(myAccount,160)

//get summary
getAccountSummary(myAccount)

//reset account
resetAccount(myAccount)

//get summary
getAccountSummary(myAccount)
