// Get reference to HTML elements and variables
const inputRockElement = document.querySelector("#selectRock");
const inputPaperElement = document.querySelector("#selectPaper");
const inputScissorsElement = document.querySelector("#selectScissors");
const resultContainer = document.querySelector('#resultContainer');
const resultMessage = document.querySelector('#resultMessage');
const divResult = document.createElement('p');
const divMessage = document.createElement('p');
const validChoice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

// Append result and message elements to the containers
resultContainer.appendChild(divResult);
resultMessage.appendChild(divMessage);

function updateResults() {
    divResult.textContent = `Computer score: ${computerScore} vs Human score: ${humanScore}`;
}

// Event listeners for button clicks
inputRockElement.addEventListener("click", function() {
    playRoundAndUpdate("rock");
});

inputPaperElement.addEventListener("click", function() {
    playRoundAndUpdate("paper");
});

inputScissorsElement.addEventListener("click", function() {
    playRoundAndUpdate("scissors");
});

function playRoundAndUpdate(humanSelection) {
    const computerSelection = getComputerChoice();
    [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
    updateResults();
}

function getComputerChoice() {
    let ccIndex = Math.floor(Math.random() * validChoice.length);
    return validChoice[ccIndex];
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === computerChoice) {
        divMessage.textContent = "It's a tie!";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'scissors' && computerChoice === 'paper') ||
               (humanChoice === 'paper' && computerChoice === 'rock')) {
        divMessage.textContent = "You won!";
        humanScore++;
    } else {
        divMessage.textContent = "You lost!";
        computerScore++;
    }
    return [humanScore, computerScore];
}