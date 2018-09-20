// const todos = ['Do homework', 'Work out', 'Walk the dog', 'Clean room', 'Be lazy']
const todos = [{
    text:'Do homework',
    completed: 'yes'
},{
    text:'Work out',
    completed: 'no'
},{
    text:'Walk the dog',
    completed: 'yes'
},{
    text:'Clean room',
    completed: 'no'
},{
    text:'Be lazy',
    completed: 'no'
}]

//1.convert array to array of objects -> text , completed 
//2. create function to remove a todo by text value
const deleteTodo = function (todo, textNote){
    
    const index = todo.findIndex(function(note,num){
       return note.text.toLowerCase() === textNote.toLowerCase() 

    })
    if (index > -1){
        todo.splice(index, 1)
    }
}

deleteTodo(todos, 'walk the dog')
console.log(todos)