
let cards = [] // array 
let sum = 0
let start = false
let gameStart = false


let player = {
    name: "ferit",
    chips: 100,
    sayHello: function() {
        console.log("hi ugly")
    }
}

function whatCard() {
    if (start === false && gameStart === true) {
        console.log("logging start")
        startGame()
    } else {
        console.log("logging end")
        endGame()
    }
}


let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number === 1) {
        return 11
    } else if (10<number) {
        return 10
    } else {
        return number
    }
}

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
 // let sumEl = document.getElementById("sum-el")
 let sumEl = document.querySelector("#sum-el")
 let cardsEl = document.getElementById("cards-el")

 function startGame() {
    document.getElementById("start-game").textContent = "END GAME"
    gameStart = false
    start = true
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
 }


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "blackjack!"
        hasBlackJack = true
        endGame()
    } else {
        message = "loser boo"
        isAlive = false
        endGame()
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false && cards.length > 1 && start === true) {
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame()
    }

}

let dealer = document.getElementById("message-el")
let dealerSum = 0

function dealerGoes() {
    console.log("this runs")
    let one = getRandomCard()
    let two = getRandomCard()
    dealerSum = one + two
    while (dealerSum < 16) {
        dealerSum += getRandomCard()
    }
    dealer.innerText = "Dealer's Hand is: " + dealerSum + "! "
}

function endGame() {
    if (isAlive === true && hasBlackJack === false) {
        dealerGoes()
        if (dealerSum > 21) {
            dealer.innerText += " dang it"
            //player.chips += price*2
        } else if (dealerSum > sum) {
            dealer.innerText += " boo you suck"
        } else if (dealerSum < sum) {
            dealer.innerText +=  " okay fine you win"
            //player.chips += price*2
        } else {
            dealer.innerText += " tie!"
            //player.chips += price
        }
    } 
    start = false
    // playerEl.textContent = player.name + ": $" + player.chips
    // price = 0

}

function newGame() { //resets the game
    //howMuch()
    console.log("this runs")
    start = false
    dealerSum = 0
    gameStart = true
    dealer.innerText = ""
    cards = []
    sum = 0
    sumEl.innerText = "Sum: "
    cardsEl.innerText = "Cards: "
    messageEl.innerText = "Want to play a round?"
    document.getElementById("start-game").innerHTML = "START GAME"
    hasBlackJack = false
    isAlive = true

}

// let price = 0

// function howMuch() {
//     console.log("this RUNS")
//     price = document.getElementById("myText").value;
//     player.chips -= price
//     if (price < player.chips) {
//         playerEl.textContent = player.name + ": $" + player.chips
//         gameStart = true
//     } else {
//         document.getElementById("bet-prompt").innerHTML = "you don't have this much money ur broke try again"
//        }
   


// }







//Array push and pop 
// cards.push(6)
// cards.pop()


////  START           FINISH      STEP SIZE
//for (let count = 1; count < 11; count += 1) 
// how many times we want to run the code and what the value of code will be

