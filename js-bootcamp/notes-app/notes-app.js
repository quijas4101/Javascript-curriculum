const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters) // initial rendering

document.querySelector('#create-notes').addEventListener('click',function(e){
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })

    savedNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters) //render latest notes every time input changes
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})