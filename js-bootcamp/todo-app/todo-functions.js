//Read excisting todos from local storage
const getSavedTodos = function(){

    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }else{
        return []
    }
}

//Save todos to local Storage 
const savedTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//remove todos from  list
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id 
    })
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// change completed property when checkbox is checked
const toggleTodo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id 
    })
    if (todo !=  undefined){
        todo.completed = !todo.completed
    }
}

//Generate the DOM structure for a todos
const generateTodoDOM = function(item){ 
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    
    //setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',function(e){
        toggleTodo(item.id)
        savedTodos(todos)
        renderTodos(todos,filters)
    })
   
    //setup todo text
    textEl.textContent = item.text
    todoEl.appendChild(textEl)

    //setup todo button
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click',function(e){
        removeTodo(item.id)
        savedTodos(todos)
        renderTodos(todos,filters)
    })
   
   
    return todoEl
}

//Render application todos based on filters
const renderTodos = function(todos,filters){
    const filteredTodos = todos.filter(function(todo){ 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch  && hideCompletedMatch
    })

    const  todosLeft = filteredTodos.filter(function(todo){ //array of todos not completed
        return !todo.completed 
    })

    document.querySelector('#todos').innerHTML = '' //wipes all previous rendered notes
    document.querySelector('#todos').appendChild(generateSummaryDOM(todosLeft))

    filteredTodos.forEach(function(item, index) {
        
        document.querySelector('#todos').appendChild(generateTodoDOM(item))
 })
}

const generateSummaryDOM = function(todosLeft){
    const summary =document.createElement('h3')
    summary.textContent = `You have ${todosLeft.length} todos left`

    return summary
}