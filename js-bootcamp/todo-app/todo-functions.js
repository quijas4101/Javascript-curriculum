'use strict'

//Read excisting todos from local storage
const getSavedTodos = () => {

    const todosJSON = localStorage.getItem('todos')
    try{
         return todosJSON ? JSON.parse(todosJSON) : []
    }catch(e){
        return []
    }

   
}

//Save todos to local Storage 
const savedTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//remove todos from  list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// change completed property when checkbox is checked
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo){
        todo.completed = !todo.completed
    }
}

//Generate the DOM structure for a todos
const generateTodoDOM = (item) => { 
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    
    //setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',() => {
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
    button.addEventListener('click',() => {
        removeTodo(item.id)
        savedTodos(todos)
        renderTodos(todos,filters)
    })
   
   
    return todoEl
}

//Render application todos based on filters
const renderTodos = (todos,filters) => {
    const filteredTodos = todos.filter(function(todo){ 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch  && hideCompletedMatch
    })

    const  todosLeft = filteredTodos.filter((todo) => !todo.completed) //array of todos not completed


    document.querySelector('#todos').innerHTML = '' //wipes all previous rendered notes
    document.querySelector('#todos').appendChild(generateSummaryDOM(todosLeft))

    filteredTodos.forEach((item, index) => {
        
        document.querySelector('#todos').appendChild(generateTodoDOM(item))
 })
}

const generateSummaryDOM = (todosLeft) => {
    const summary =document.createElement('h3')
    summary.textContent = `You have ${todosLeft.length} todos left`

    return summary
}