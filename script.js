const getComputerChoice = () => {
  let numChoice = Math.floor(Math.random() * 3);
  const computerChoice =
    numChoice === 0 ? "rock" : numChoice === 1 ? "paper" : "scissors";
  return computerChoice;
};

const getHumanChoice = () => {
  const userChoice = prompt("What do you choose? rock ,paper or scissors.");

  return userChoice.toLowerCase();
};

const playRound = (humanChoice, computerChoice) => {
  let result = 0;
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      result = 1;
    } else if (computerChoice === "paper") {
      result = -1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = 1;
    } else if (computerChoice === "scissors") {
      result = -1;
    }
  } else {
    if (computerChoice === "paper") {
      result = 1;
    } else if (computerChoice === "rock") {
      result = -1;
    }
  }
  return result;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (result === 1) {
      humanScore += 1;
    } else if (result === -1) {
      computerScore += 1;
    } else {
    }
    // console.log(`human:${humanScore} computer:${computerScore}`);
    console.log(
      result === 1
        ? `${humanChoice} beats ${computerChoice} human wins`
        : result === -1
        ? `${computerChoice} beats ${humanChoice} computer wins`
        : `both chose ${computerChoice} It's a draw`
    );
  }
  console.log(
    humanScore > computerScore
      ? "human wins the game"
      : humanScore === computerScore
      ? "Game is a draw"
      : "Computer wins the game"
  );
  console.log(`human:${humanScore}\t computer:${computerScore}`);
};
playGame();
