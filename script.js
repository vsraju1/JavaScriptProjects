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


if(possibleInputs.includes(userInput)) {
    if(userInput === "ROCK" || userInput === "R" && compChoice === "ROCK") {
        console.log(`Computer choice is ${compChoice}`)
        console.log(`User choice is ${userInput}`)
    }
}
else{
    console.log("OOps looks like you have entered an incorrect input. Please re-enter.")
}

// Printing a element from computer choices of random index
