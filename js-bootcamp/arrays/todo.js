//create array with 5 todos
// print You have x todo
// Print the first and second to last items -> Todo: walk the dog , 
const todos = ['Do homework', 'Work out', 'Walk the dog', 'Clean room', 'Be lazy']

//delete the 3rd item
//add new item onto the end
//remove the first item from the list

todos.splice(2,1)
todos.push('New task')
todos.shift()

console.log(`You have ${todos.length} todos`)

todos.forEach(function(item,index){
    console.log(`${index + 1}. ${item}`)
})

//console.log(todos)
//console.log(`Todo: ${todos[0]}`)
//console.log(`Todo: ${todos[3]}`)