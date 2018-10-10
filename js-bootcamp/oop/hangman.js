const Hangman = function(word, guesses){
    this.word = word
    this.guesses = guesses
}

const firstWord = new Hangman('California', 4)
console.log(firstWord)

const secondWord = new Hangman('Dog', 2)
console.log(secondWord)