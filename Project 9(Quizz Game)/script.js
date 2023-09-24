const prompt = require("prompt-sync")();
let score = 0;
let totalQuestions = 3;

console.log("Welcome to the quizz about me!!!");

const ans1 = prompt("What is my game name in PUBG? ");
const correctAnswer = "GHOST RAJU";
if (ans1.toUpperCase() === correctAnswer) {
  console.log("you got it right. SO you know my game name.");
  score += 1;
} else {
  console.log("so we haven't palyed yet!! you got it wrong");
}


const ans2 = prompt(
  "What is degree name in loyola college(in short form cs/it/ce): "
);

const correctAnswer2 = "CE"
if (ans2.toUpperCase() === correctAnswer2) {
  console.log("Yeppp, you got it correct!!");
  score +=1;
} else {
  console.log("I think we are classmates or not from the same college.");
}

const ans3 = prompt(
  "what is bike(name or model):"
);
if (ans3.toUpperCase() === "NS" || ans3.toUpperCase() === "160" || ans3.toUpperCase() === "PULSAR" || ans3.toUpperCase() === "PULSAR NS 160") {
  console.log("Yeppp, you got it correct!!");
  score +=1;
} else {
  console.log("nope! you haven't seen my bike..");
}

console.log("Your score is " ,score)
const percentage = (score/totalQuestions * 100);
console.log("So you got ", percentage.toFixed(2)+"%");



