const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let game1 
 
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.Status

    game1.Puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () =>{
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, '5')
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('3').then((data) => {
//         console.log(data)
//     }).catch ((error) =>{
//         console.log(`Error: ${error}`)
//     }
// )

// getCurrentCountry().then((data) =>{
//     console.log(data)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// }
// )

// getLocation().then((data) => {
//     console.log(`Region: ${data.region}, Country: ${data.country}, City: ${data.city}`)
//     return getCountry(data.country)
// }).then((cou)=> {
//     console.log(cou.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })
