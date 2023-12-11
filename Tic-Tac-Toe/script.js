const message = document.getElementById("showResulte")
const resetButton = document.querySelector(".resetGame")
const mouseClick = new Audio("/Sounds/mouseClick.mp3")
const gameWiningSound = new Audio("/Sounds/gameWiningSound.mp3")
const gameTie = new Audio("/Sounds/tie.mp3")
let winnerDeside = false
let currentUser = true
let array = []




// ------------------------------------------ Check winner ------------------------------------------

const checkIfWinnerIsDeside = (char) => {
    if (array[0] == char && array[1] == char && array[2] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[3] == char && array[4] == char && array[5] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[6] == char && array[7] == char && array[8] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[0] == char && array[3] == char && array[6] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[1] == char && array[4] == char && array[7] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[2] == char && array[5] == char && array[8] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[0] == char && array[4] == char && array[8] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    else if (array[6] == char && array[4] == char && array[2] == char) {
        message.innerHTML = `${char} Won the game`
        message.classList.add("winnerDeside")
        winnerDeside = true
        gameWiningSound.play()
        return
    }
    if (array[0] && array[1] && array[2] && array[3] && array[4] && array[5] && array[6] && array[7] && array[8]) {
        message.innerHTML = `Match is tie`
        message.classList.add("matchIsTie")
        gameTie.play()
        winnerDeside = true
        return
    }
}


const boxClick = (index) => {
    if (array[index]) return
    if (winnerDeside) return
    resetButton.style.display = "block"

    mouseClick.play()
    const cell = document.getElementById(index)
    if (currentUser) {
        array[index] = "X"
        cell.innerHTML = "X"
        checkIfWinnerIsDeside("X")
        currentUser = false
    }
    else {
        array[index] = "O"
        cell.innerHTML = "O"
        checkIfWinnerIsDeside("O")
        currentUser = true
    }
}

// ------------------------------------------ Reset game ------------------------------------------
resetButton.addEventListener("click", () => {
    const allCell = document.querySelectorAll("div.tic-tac-toe-cell")
    for (let i = 0; i < allCell.length; i++) {
        allCell[i].innerHTML = ""
        array[i] = ""
    }
    message.innerHTML = ""
    resetButton.style.display = "none"
    gameWiningSound.pause()
    gameTie.pause()
    winnerDeside = false
})


