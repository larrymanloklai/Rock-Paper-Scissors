/* first javascript*/

const validChoice = ['rock', 'paper', 'scissors'];
const humanScore = 0;
const computerScore = 0;

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

function playRound(humanChoice, computerChoice) {

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);