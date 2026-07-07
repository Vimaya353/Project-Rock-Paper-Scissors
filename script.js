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

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

    for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}`);
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    playRound(humanSelection, computerSelection);

    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game ended in a tie!");
  }
}

playGame();

