const notes = [{
    title: 'My next Trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on', 
    body: 'Excercise. Eating a bit better '
}, {
    title: 'Office modification', 
    body: 'Get a new seat'
}, {
    title: 'Play League', 
    body: 'Practice new champs'
}, {
    title: 'Work schedule', 
    body: 'Create schedule for employees'
},]

const filters = {
    searchText: ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){ 
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '' //wipes all previous rendered notes

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters) // initial rendering

document.querySelector('#create-notes').addEventListener('click',function(e){
    e.target.textContent = 'This button was clicked'
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters) //render latest notes every time input changes
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})