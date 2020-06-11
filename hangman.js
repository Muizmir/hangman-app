class Hangman {
    constructor(word, guesses){
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessed = []
    this.status = 'playing'
    }
    get Puzzle(){
        let trial = ''

        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                trial += letter
            } else {
                trial += '*'
            }
        })
        return trial
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessed.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.guesses--
        }
        this.calculateStatus()
    }
    calculateStatus(){
        let finished = true
        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {

            } else {
                finished = false
            }
        })
        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get Status(){
        if (this.status === 'playing') {
            return `Guesses left : ${this.guesses}`
        } else if (this.status === 'failed') {
            return `Sorry.. You failed. The word was "${this.word.join('')}"`
        } else {
            return `Great work ! You guessed it right`
        }
    }
}


