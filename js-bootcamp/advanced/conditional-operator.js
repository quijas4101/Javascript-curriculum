/* const myAge = 17

onst message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'


// if(myAge >= 18){
//     message = 'You can vote!'
// }else {
//     message = 'You cannot vote.'
// }

console.log(message) */


const myAge = 21

const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)


const team = ['Tyler', 'Porter', 'Zac', 'Jose']

const newMessage = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'

console.log(newMessage)