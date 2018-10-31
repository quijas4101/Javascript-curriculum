
const Hangman = function(word , remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter 
            
        }else{
            puzzle += '*' 
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess){
    guess =  guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique){
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

const firstWord = new Hangman('California', 4)
console.log(firstWord.getPuzzle())
console.log(firstWord.remainingGuesses)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)

    firstWord.makeGuess(guess)
    console.log(firstWord.getPuzzle())
    console.log(firstWord.remainingGuesses)
})
