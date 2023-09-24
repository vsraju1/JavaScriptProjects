// 1. Deposit some money
// 2. Determine no. of lines bet
// 3. Collect the money
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user winning
// 7. Play again

const prompt = require("prompt-sync")();

function deposit(){
    while (true){
    const depositAmount = prompt("Enter your deposit: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Please enter a valid deposit amount.")
    }
}
}

deposit();