const account = {
    name: 'Jose Quijas', 
    expenses:[], 
    incomes:[], 

    addIncome:function(description, amount){ //adds new object of income to income property array
        this.incomes.push({
            description: description, 
            amount: amount
        })
    }, 

    addExpense: function(description , amount){ //adds new object of expenses to expense property array
        this.expenses.push({
            description: description, 
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense){ // adds all expenses 
            totalExpenses += expense.amount 
        })

        this.incomes.forEach(function(income){ // adds all incomes
            totalIncome += income.amount 
        })

        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}



account.addExpense('Rent', 950)
account.addExpense('Water', 150)
account.addIncome('Job', 2000)
console.log(account.getAccountSummary())