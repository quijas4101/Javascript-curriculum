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

// console.log(notes.pop()) //pop removes laste item and returns it
// notes.push('New note')

// console.log(notes.shift()) // shift removes first item and returns it
// notes.unshift('New first note') // unshift adds new item to begining of the array

//splice takes 3 arguments 1st argument= index, 2nd argument = # of items we want to remove 3rd argument = what you want to add
 //notes.splice(1,1,'New second note')

/* notes[1]= 'New second note '

 notes.forEach(function(item, index) {
    console.log(index)
     console.log(item)
 })
*/

console.log(notes.length)
console.log(notes)

/*for(let a = notes.length - 1; a >= 0 ; a--){
    console.log(notes[a])
}*/

const index = notes.findIndex(function(note,index){ // stops after it finds what it was looking for
    console.log(note)
    return note.title === ' Habbits to work on'
})

console.log(index)