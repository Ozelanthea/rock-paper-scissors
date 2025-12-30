console.log("Hello World")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    const random = Math.floor(Math.random() * 3);

    if (random === 1) {
        return choice1;
    } else if (random === 2) {
        return choice2;
    } else {
        return choice3;
    }

}


function getHumanChoice() {
    let userInput = prompt("What do you choose: Rock, Paper, or Scissors?")

    let choice = userInput.toLowerCase();

    return choice;
}


function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
        return("It's a tie!");
    } else if (
        (normalizedHumanChoice === "rock" && computerChoice === "scissors") || 
        (normalizedHumanChoice === "paper" && computerChoice === "rock") || 
        (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return ("You win! " + normalizedHumanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        return("You lose! " + computerChoice + " beats " + normalizedHumanChoice);
    }

    
}


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log("The computer chose: " + computerSelection);
// console.log(playRound(humanSelection, computerSelection));

// console.log("Human Score: " + humanScore);
// console.log("Computer Score: " + computerScore);


function playGame() {
    const human1 = getHumanChoice();
    const computer1 = getComputerChoice();
    console.log(playRound(human1, computer1));

    const human2 = getHumanChoice();
    const computer2 = getComputerChoice();
    console.log(playRound(human2, computer2));

    const human3 = getHumanChoice();
    const computer3 = getComputerChoice();
    console.log(playRound(human3, computer3));

    const human4 = getHumanChoice();
    const computer4 = getComputerChoice();
    console.log(playRound(human4, computer4));

    const human5 = getHumanChoice();
    const computer5 = getComputerChoice();
    console.log(playRound(human5, computer5));

    console.log("Final Results:");
    console.log("Human: " + humanScore + " | Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the match!");
    } else if (computerScore > humanScore) {
        console.log("Game Over! The computer won the match.");
    } else {
        console.log("The match ended in a tie!");
    }
}

playGame();
