const puzzleEl = document.querySelector('#puzzle')
const guessesEl =  document.querySelector('#guesses')
const firstWord = new Hangman('California', 4)

puzzleEl.textContent = firstWord.getPuzzle()
guessesEl.textContent = firstWord.getStatusMessage()


window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)

    firstWord.makeGuess(guess)
    puzzleEl.textContent = firstWord.getPuzzle()
    guessesEl.textContent = firstWord.getStatusMessage()
   
})
