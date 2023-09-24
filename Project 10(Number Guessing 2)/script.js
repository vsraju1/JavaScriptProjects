const prompt = require("prompt-sync")();

// set a number of time that user can guess
let chances = 10;

let randomNumber;
let guessedNumber;
let maxNum;

let selectLevel = prompt("Choose your level (E/M/H): ");

if (selectLevel.toUpperCase() === "E") {
  maxNum = 50;
  randomNumber = 10 + Math.ceil(Math.random() * 40);
} else if (selectLevel.toUpperCase() === "M") {
  maxNum = 100;
  randomNumber = 10 + Math.ceil(Math.random() * 90);
} else if (selectLevel.toUpperCase() === "H") {
  maxNum = 500;
  randomNumber = 10 + Math.ceil(Math.random() * 490);
}

for (i = chances; i > 0; i--) {
  guessedNumber = Number(prompt(`Enter any number (10-${maxNum}): `));
  if (guessedNumber === randomNumber) {
    console.log("Yess you guessed it right");
    break;
  }

  if (guessedNumber > randomNumber) {
    console.log("ohhh you guessed too high");
    console.log(`You have ${i - 1} guesses ramaining.`);
  }
  if (guessedNumber < randomNumber) {
    console.log("looks like you guessed a lower number try again.");
    console.log(`You have ${i - 1} guesses ramaining.`);
  }
}

if (guessedNumber !== randomNumber) {
  setTimeout(() => {
    console.log(`And the random number is ${randomNumber}`);
  }, 1000);
  console.log("You are out of the guesse, try again.");
}
// console.log("Random number is ",randomNumber);
// console.log("Your number is ",guessedNumber);
