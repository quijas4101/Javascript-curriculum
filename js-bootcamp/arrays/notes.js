const notes = [{
    title: 'My next Trip',
    body: 'I would like to go to Spain'
}, {
    title: ' Habbits to work on', 
    body: 'Excercise. Eating a bit better '
}, {
    title: 'Office modification', 
    body: 'Get a new seat'
}]
const findNote = function (notes,noteTitle){
    
    return  notes.find(function(note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()   // once statement is true it returns the item
    })
  
}

/* const findNote = function (notes,noteTitle){
    const index = notes.findIndex(function(note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()   // once statement is true it returns the index
    })
    return notes[index]
}
 */
const note = findNote(notes,'offiCe mOdification' )
console.log(note)