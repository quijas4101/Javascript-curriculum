//DOM - Document Object Model

//Query and remove
/* const p = document.querySelector('p')
p.remove() */

//query all and remove
const ps = document.querySelectorAll('p') // finds all p tags

ps.forEach(function(p){

    p.textContent = '******'
    //console.log(p.textContent)
    // p.remove()
})