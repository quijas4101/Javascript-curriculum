const todos = [{
    text: 'Do homework',
    completed: false
}, {
    text: 'Work out',
    completed: true
}, {
    text: 'Walk the dog',
    completed: false
}, {
    text: 'Clean room',
    completed: true
}, {
    text: 'Read',
    completed: true
}, {
    text: 'Do payroll',
    completed: false
}]

const filters = { //keeps track of latest data
    searchText: '', 
    hideCompleted: false
}

const renderTodos = function(todos,filters){
    const filteredTodos = todos.filter(function(todo){ 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch  && hideCompletedMatch
    })

    /* filteredTodos = filteredTodos.filter(function(todo){
        return !filters.hideCompleted || !todo.completed
        // if(filter.hideCompleted){
           // return !todo.completed
       // }else{
          //  return true
        //} 
    }) */

    document.querySelector('#todos').innerHTML = '' //wipes all previous rendered notes

    const  todosLeft = filteredTodos.filter(function(todo){ //array of todos not completed
        return !todo.completed 
    })
    
    const newH3 =document.createElement('h3')
    newH3.textContent = `You have ${todosLeft.length} todos left`
    document.querySelector('#todos').appendChild(newH3)

    filteredTodos.forEach(function(item, index) {
        const newParagraph =document.createElement('p')
        newParagraph.textContent = item.text
        document.querySelector('#todos').appendChild(newParagraph)
 })
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
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})
