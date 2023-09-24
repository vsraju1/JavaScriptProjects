const prompt = require("prompt-sync")();

console.log("Welcome to the quizz about me!!!");



function showMsg() {
  const ans1 = prompt("What is my game name in PUBG? ");
  const correctAnswer = "GHOST RAJU";
  setTimeout(() => {
  if (ans1.toUpperCase() === correctAnswer) {
    console.log("SO you know my game name.");
  } else {
    console.log("so we haven't palyed yet!! you got it wrong");
  }
}, 1000)
}

// function showMsg(){
//     let value = prompt("Enter your name: ");
//     // console.log(value)
//     function showValue(){
//         console.log(value.toUpperCase())
//     }
//     console.log("loading...")
//     setTimeout(showValue, 1000);
// }

setTimeout(showMsg, 1000);
