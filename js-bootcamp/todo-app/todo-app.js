'use strict'

let todos = getSavedTodos()

const filters = { //keeps track of latest data
    searchText: '', 
    hideCompleted: false
}

renderTodos(todos, filters)


document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
    
})

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit',(e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text:e.target.elements.newTodo.value,
        completed: false
    })
    savedTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
    
})
