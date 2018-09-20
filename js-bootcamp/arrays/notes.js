const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop()) //pop removes laste item and returns it
// notes.push('New note')

// console.log(notes.shift()) // shift removes first item and returns it
// notes.unshift('New first note') // unshift adds new item to begining of the array

//splice takes 3 arguments 1st argument= index, 2nd argument = # of items we want to remove 3rd argument = what you want to add
 //notes.splice(1,1,'New second note')

 notes[1]= 'New second note '

 notes.forEach(function(item, index) {
    console.log(index)
     console.log(item)
 })

console.log(notes.length)
console.log(notes)
//console.log(notes[notes.length-1])