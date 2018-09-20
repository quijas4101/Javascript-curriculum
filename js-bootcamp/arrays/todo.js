// const todos = ['Do homework', 'Work out', 'Walk the dog', 'Clean room', 'Read']
const todos = [{
    text: 'Do homework',
    completed: 'no'
}, {
    text: 'Work out',
    completed: 'yes'
}, {
    text: 'Walk the dog',
    completed: 'no'
}, {
    text: 'Clean room',
    completed: 'no'
}, {
    text: 'Read',
    completed: 'yes'
}]

//1.convert array to array of objects -> text , completed 
//2. create function to remove a todo by text value

const deleteTodo = function (todos, note){
    const index = todos.findIndex(function(todo){

        return todo.text.toLowerCase() === note.toLowerCase()
    })

    if(index > -1){
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'walk the dog')
console.log(todos)