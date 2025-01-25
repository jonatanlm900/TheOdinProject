// the computer chosses 
// the player chosses 
// the choices are compared 

function getComputerChoice() {
    choice = parseInt(Math.random() * (4 - 1) + 1);
    return choice === 1 ? "rock" : (choice === 2 ? "paper" : "sizor");
}

function getPlayerChoice() {
    return  prompt("What is your choice ?", "rock");
} 

function rockpapersizor(computerChoice, playerChoice) {
    console.log("player choice: " + playerChoice);
    console.log("computer choice: " + computerChoice)
    if (playerChoice === computerChoice) {
        return alert("Its a tie");
    }
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return alert("You lost!");
        } else if (computerChoice === "sizor") {
            return alert("You win!");
        }
   } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return alert("you win!");
        } else if (computerChoice === "sizor") {
            return alert("you lost")
        }
   } else if (playerChoice === "sizor") {
        if (computerChoice === "paper") {
            return alert("you win!");
        } else if (computerChoice === "rock" ) {
            return alert("you lost!");
        }
   } else {
        return alert("Choice not valid !");
   }

}

computerChoice = computerChooses();
playerChoice = playerChooses();
rockpapersizor(computerChoice,playerChoice);