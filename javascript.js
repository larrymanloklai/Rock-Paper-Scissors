/* first javascript*/


function getComputerChoice() {
    let ccIndex = Math.floor(Math.random()*validChoice.length);
    return validChoice[ccIndex]
}

function getHumanChoice() {
    let userInput = "";
    while (true) {
        userInput = prompt("Please enter rock, paper, or scissors:").toLowerCase();
        if (validChoice.includes(userInput)) {
            return userInput
        } else {
            alert("Invalid input. Please try again.");
        }
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice==computerChoice) {
        console.log("it's a tie!");
    } else if ((humanChoice=='rock' && computerChoice =='scissors') ||
    (humanChoice=='scissors' && computerChoice =='paper') ||
    (humanChoice=='paper' && computerChoice =='rock')) {
        console.log("you won!")
        humanScore++;
    } else {
        console.log("you loss!")
        computerScore++;
    }
    return [humanScore, computerScore];
}

const validChoice = ['rock', 'paper', 'scissors'];

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
        console.log(`computer score ${computerScore}`)
        console.log(`human score is ${humanScore}`)
    }
}

playGame()