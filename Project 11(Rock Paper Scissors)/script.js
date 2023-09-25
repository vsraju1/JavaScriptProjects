const prompt = require("prompt-sync")();

// definign an array that computer can select
const comData = new Array("rock", "paper", "scissor")

// Defining an array possible inputs that user can enter
const possibleInputs = ["ROCK","PAPER","SCISSORS","R","P","S","PAPAERS"]

// Generating a number between 0-1
let randomChoiceNum = Math.floor(Math.random() * 3);

// Defining computer choice
let compChoice = comData[randomChoiceNum].toUpperCase();

// Asking user to select their choice 
const userInput = prompt("Enter your choice (rock/paper/scissor or r/p/s): ").toUpperCase();

// Checking if user has entered a valid input
if(possibleInputs.includes(userInput)) {
    if(userInput === compChoice) {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("It's a tie")
    }else if (userInput === "PAPERS" || userInput === "PAPER" && compChoice === "ROCK") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("You win!!!")
    }else if (userInput === "SCISSORS" && compChoice === "ROCK") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("You loose!!!")
    }else if (userInput === "ROCK" && compChoice === "PAPER") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("Computer has won the match!!!")
    }else if (userInput === "SCISSOR" && compChoice === "PAPER") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("You win!!!")
    }else if (userInput === "PAPERS" || userInput === "PAPER" && compChoice === "SCISSOR") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("You lost!!!")
    }else if (userInput === "ROCK" && compChoice === "SCISSOR") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`Your choice is ${userInput}`)
        console.log("You win!!!")
    }
}
else{
    console.log("OOps looks like you have entered an incorrect input. Please re-enter.")
}

// Printing a element from computer choices of random index
