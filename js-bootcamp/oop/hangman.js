
const Hangman = function(word , guesses){
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['c', 'a']
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

const firstWord = new Hangman('California', 4)
console.log(firstWord.getPuzzle())

const secondWord = new Hangman('Cat', 2)
console.log(secondWord.getPuzzle())

const thirdWord = new Hangman('Because', 3)
console.log(thirdWord.getPuzzle())