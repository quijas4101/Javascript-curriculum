const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters) // initial rendering

document.querySelector('#create-notes').addEventListener('click',function(e){
   const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })

    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters) //render latest notes every time input changes
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})