const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body') 
const removeButton = document.querySelector('#remove-note')
const saveButton = document.querySelector('#save-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('./index.html')
}

titleElement.value = note.title
bodyElement.value= note.body

removeButton.addEventListener('click',function(e){
    removeNote(note.id)
    savedNotes(notes)
    location.assign('./index.html')
})


saveButton.addEventListener('click', function(e){
    note.title = titleElement.value
    note.body = bodyElement.value
    savedNotes(notes)
    location.assign('./index.html')
})