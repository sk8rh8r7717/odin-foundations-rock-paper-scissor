function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let chance = Math.random()
    if (chance < (1/3)) {
        return choices[0]
    }
    else if (chance >= (1/3) && chance < (2/3)) {
        return choices[1]
    }
    else if (chance >= (2/3) && chance < 1) {
        return choices[2]
    }
}

function getHumanChoice() {
    while (true) {
        let humanChoice = String(prompt('Rock, Paper or Scissors?'))
        if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "scissors"){
            return humanChoice.toLowerCase()
        }
    }
}

function playRound(humanChoice, computerChoice) {
    array = ['rock', 'paper', 'scissors']
    let humanVal = -1
    let computerVal = -1
    for (let i = 0; i <= 2; i++){
        if (humanChoice == array[i]){
            humanVal = i
        }
        if (computerChoice == array[i]){
            computerVal = i
        }
    }
    let calculation = humanVal - computerVal

    if (calculation == 0) {
        msg = "Draw: You both chose " + humanChoice;
        return 0
    }

    else if (calculation == -2 || calculation == 1) {
        msg = 'You won, You chose ' + humanChoice + ' and computer chose ' + computerChoice;
        humanScore++;
        return 1
    }

    else if (calculation == -1 || calculation == 2) {
        msg = 'You lost, You chose ' + humanChoice + ' and computer chose ' + computerChoice;
        computerScore++;
        return 2
    }
}


//MAIN
let humanScore = 0
let computerScore = 0
let msg = ""

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const messageDiv = document.getElementById("result");



rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissor);
function playRock() {
    winner = playRound("rock", getComputerChoice());
    let messageListItem = document.createElement("li");
    messageListItem.innerText = msg + "\n"+ humanScore + " " +  computerScore;
    messageDiv.append(messageListItem)
    if (humanScore >= 5 || computerScore >= 5) {
        rockButton.removeEventListener("click", playRock)
        paperButton.removeEventListener("click", playPaper)
        scissorsButton.removeEventListener("click", playScissor)
        if (humanScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You won! score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }

        else if (computerScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You lost. score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }
    }
}
    
function playPaper() {
    winner = playRound("paper", getComputerChoice());
    let messageListItem = document.createElement("li");
    messageListItem.innerText = msg + "\n"+ humanScore + " " +  computerScore;
    messageDiv.append(messageListItem)
    if (humanScore >= 5 || computerScore >= 5) {
        rockButton.removeEventListener("click", playRock)
        paperButton.removeEventListener("click", playPaper)
        scissorsButton.removeEventListener("click", playScissor)
        if (humanScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You won! score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }

        else if (computerScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You lost. score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }
    }
}
    
function playScissor() {
    winner = playRound("scissors", getComputerChoice());
    let messageListItem = document.createElement("li");
    messageListItem.innerText = msg + "\n"+ humanScore + " " +  computerScore;
    messageDiv.append(messageListItem)
    if (humanScore >= 5 || computerScore >= 5) {
        rockButton.removeEventListener("click", playRock)
        paperButton.removeEventListener("click", playPaper)
        scissorsButton.removeEventListener("click", playScissor)
        if (humanScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You won! score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }

        else if (computerScore >= 5) {
            let messageListItem = document.createElement("li");
            messageListItem.innerText = "You lost. score: " + humanScore + " " + computerScore;
            messageDiv.append(messageListItem);
        }

    }
}
