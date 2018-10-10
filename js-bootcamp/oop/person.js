const Person = function(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Jose', 'Quijas', 28)

console.log(me) 

const person2 = new Person('Clancy', 'Turner', 51)

console.log(person2)