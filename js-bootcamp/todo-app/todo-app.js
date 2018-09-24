let todos = getSavedTodos()

const filters = { //keeps track of latest data
    searchText: '', 
    hideCompleted: false
}

renderTodos(todos, filters)


document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
    
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.newTodo.value,
        completed: false
    })
    savedTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
    
})
