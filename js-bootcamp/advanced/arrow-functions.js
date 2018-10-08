const square = (num) =>  num*num


const squareLong = (num) => {
    return num*num
}
console.log(square(5))

const people = [{
    name:'Jose' , 
    age: 27
}, {
    name:'Zac' , 
    age: 22
}, {
    name:'Pedro' , 
    age: 31

}]

/* const under30 = people.filter(function (person){
        return person.age < 30
}) */

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

//CHALLENGE  
//1.Find the person with age 22
//2. Print person name

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)