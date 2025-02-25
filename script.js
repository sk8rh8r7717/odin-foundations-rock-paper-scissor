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
        console.log('Draw: You both chose ' + humanChoice)
        return 0
    }

    else if (calculation == -2 || calculation == 1) {
        console.log('You won, You chose ' + humanChoice + ' and computer chose ' + computerChoice)
        return 1
    }

    else if (calculation == -1 || calculation == 2) {
        console.log('You lost, You chose ' + humanChoice + ' and computer chose ' + computerChoice)
        return 2
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let winner = 0
    for(let i = 0; i <= 4; i++){
        winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner == 1) {
            humanScore++;
        }
        else if (winner == 2) {
            computerScore++;
        }
        console.log(humanScore + " " +  computerScore)
    }

}

//MAIN
let humanScore = 0
let computerScore = 0

playGame()