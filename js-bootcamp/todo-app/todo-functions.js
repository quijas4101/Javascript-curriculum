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

//Generate the DOM structure for a todos
const generateTodoDOM = function(item){
    const newParagraph =document.createElement('p')
    newParagraph.textContent = item.text
   
    return newParagraph
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