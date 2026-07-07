let humanScore = 0;
let computerScore = 0;

const scoreDisplay = document.getElementById("score");
const roundResultDisplay = document.getElementById("round-result");
const finalResultDisplay = document.getElementById("final-result");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function updateScore() {
  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function endGame(message) {
  finalResultDisplay.textContent = message;
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (humanChoice === computerChoice) {
    roundResultDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResultDisplay.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResultDisplay.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

  updateScore();

  if (humanScore === 5) {
    endGame("You won the game!");
  } else if (computerScore === 5) {
    endGame("Computer won the game!");
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});