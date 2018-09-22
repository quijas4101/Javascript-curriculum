const notes = [{
    title: 'my next Trip',
    body: 'I would like to go to Spain'
}, {
    title: ' Habbits to work on', 
    body: 'Excercise. Eating a bit better '
}, {
    title: 'Office modification', 
    body: 'Get a new seat'
}]

//array sort method
const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1 // if a comes first
        }else if (b.completed.toLowerCase() < a.completed.toLowerCase()){
            return 1 // if b comes first
        }else{
            return 0  // if they are the same
        }
    })
}

//array find method
const findNote = function (notes,noteTitle){
    return  notes.find(function(note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()   // once statement is true it returns the item
    })
}

//array filter method
const findNotes = function(notes,query){
    return notes.filter(function(note,index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    
    return isTitleMatch || isBodyMatch
})
}


/* console.log(findNotes(notes, 'eating'))

const note = findNote(notes,'some other offiCe mOdification' )
console.log(note) */

sortNotes(notes)
console.log(notes)