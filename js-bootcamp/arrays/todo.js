const todos = [{
    text: 'Do homework',
    completed: false
}, {
    text: 'Work out',
    completed: true
}, {
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Clean room',
    completed: false
}, {
    text: 'Read',
    completed: true
}]

//array sort method
const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(a.completed < b.completed){ //could have also use (!a.completed && b.completed)
            return -1 // if a comes first
        }else if (b.completed < a.completed){ //could have also use (a.completed && !b.completed)
            return 1 // if b comes first
        }else{
            return 0  // if they are the same
        }
    })
}

//array findIndex method
const deleteTodo = function (todos, note){  
    const index = todos.findIndex(function(todo){ 

        return todo.text.toLowerCase() === note.toLowerCase()  //if note == the title then return the current index
    })

    if(index > -1){
        todos.splice(index, 1)  // delete array item that index is on 
    }
}

//array filter method
const getThingsToDo = function(todos){
    return todos.filter(function(todo,index){  //returns area with items not completed
    const isNotComplete= !todo.completed   //if current complete is false  
    
    return isNotComplete // store current item in new array
})

}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

/* deleteTodo(todos, 'walk the dog')
console.log(todos) */