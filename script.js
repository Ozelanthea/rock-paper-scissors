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


const rock = document.createElement("button");
rock.textContent = "Rock";

rock.addEventListener("click", event => {
    const roundResult = playRound("rock", getComputerChoice());
    runningScore(roundResult);
})

const paper = document.createElement("button");
paper.textContent = "Paper";

paper.addEventListener("click", event => {
    const roundResult = playRound("paper", getComputerChoice());
    runningScore(roundResult);
})

const scissors = document.createElement("button");
scissors.textContent = "Scissors";

scissors.addEventListener("click", event => {
    const roundResult = playRound("scissors", getComputerChoice());
    runningScore(roundResult);
})

const results = document.createElement("div");

document.body.append(rock, paper, scissors, results);

function runningScore(roundResult) {
    if (humanScore === 5) {
        results.textContent = "Congratulations! You won the match.";
        [rock, paper, scissors].forEach(button => button.disabled = true);
    } else if (computerScore === 5) {
        results.textContent = "Game over! The computer won the match.";
        [rock, paper, scissors].forEach(button => button.disabled = true);
    } else {
        results.textContent = `${roundResult} | Human : ${humanScore} | Computer: ${computerScore}`;
    }
}


// function playGame() {
//     const human1 = getHumanChoice();
//     const computer1 = getComputerChoice();
//     console.log(playRound(human1, computer1));

//     const human2 = getHumanChoice();
//     const computer2 = getComputerChoice();
//     console.log(playRound(human2, computer2));

//     const human3 = getHumanChoice();
//     const computer3 = getComputerChoice();
//     console.log(playRound(human3, computer3));

//     const human4 = getHumanChoice();
//     const computer4 = getComputerChoice();
//     console.log(playRound(human4, computer4));

//     const human5 = getHumanChoice();
//     const computer5 = getComputerChoice();
//     console.log(playRound(human5, computer5));

//     console.log("Final Results:");
//     console.log("Human: " + humanScore + " | Computer: " + computerScore);

//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the match!");
//     } else if (computerScore > humanScore) {
//         console.log("Game Over! The computer won the match.");
//     } else {
//         console.log("The match ended in a tie!");
//     }
// }

// playGame();



// const output = document.querySelector(".output");
// output.textContent = "";

// let i = 10;


// while (i >= 0) {
//     const para = document.createElement('p');

//     if (i === 10) {
//         para.textContent = "Countdown 10";
//     } else if (i === 0) {
//         para.textContent = "Blast off!"
//     } else {
//         para.textContent = i;
//     }

//     output.appendChild(para);
//     i--;
// }


// const people = [
//   "Chris",
//   "Anne",
//   "Colin",
//   "Terri",
//   "Phil",
//   "Lola",
//   "Sam",
//   "Kay",
//   "Bruce",
// ];

// const admitted = document.querySelector(".admitted");
// const refused = document.querySelector(".refused");
// admitted.textContent = "Admit: ";
// refused.textContent = "Refuse: ";

// // loop starts here

// // refused.textContent += ...;
// // admitted.textContent += ...;


// for (let i = 0; i < people.length; i++) {
//     if (people[i] === "Phil" || people[i] === "Lola") {
//         refused.textContent += `${people[i]}, `;
//     } else {
//         admitted.textContent += `${people[i]}, `;
//     }
// }

// refused.textContent = refused.textContent.slice(0, -2) + ".";
// admitted.textContent = admitted.textContent.slice(0, -2) + ".";



// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }


// for (let i = 2; i <= 10; i++) {

//     if (i % 2 == 0) {
//         alert(i);
//     }
// }


// let i = 0;

// while (i < 3) {
//     alert( `number ${i}!` ); 
//     i++
// }


// let i;

// do {
//     i = +prompt("Enter a number greater than 100:", 0);
// } while (i <= 100 && i !==0);

// let n = 10;

// nextPrime: 
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue nextPrime;
//     }

//     alert(i);
// }


