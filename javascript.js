const computer = document.querySelector('#computer');
const user = document.querySelector('#user');
const result = document.querySelector('#result');
const points = document.querySelector('#points');
const buttons = document.querySelectorAll('button');
const paper = '📝Paper';
const rock = '🗿Rock';
const scissors = '✂️Scissors';
let score = 0;

const userSpan = document.querySelector('#user-choice');
const computerSpan = document.querySelector('#computer-choice');
const resultSpan = document.querySelector('#game-result');
const pointsSpan = document.querySelector('#score');


processButtons();


function processResult(userChoice, computerChoice) {
    if (userChoice != "") {
        let userWon = userWin(computerChoice, userChoice);
        if (userWon) {
            score++;
            pointsSpan.textContent = score;
            resultSpan.textContent = "You Won!";
        } else if (userChoice == computerChoice) {
            resultSpan.textContent = "Draw!";
        } else {
            resultSpan.textContent = "You Lost!";
        }
    }
}


function userWin(computerSelect, userSelect) {
    return (computerSelect == scissors && userSelect == rock) || (computerSelect == rock && userSelect == paper) 
    || (computerSelect == paper && userSelect == scissors);
}

function getComputerChoice() {
    const choices = [paper, rock, scissors];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function processButtons() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userSpan.textContent = button.textContent;            
            let userChoice = userSpan.textContent;
            let computerChoice = getComputerChoice();
            computerSpan.textContent = computerChoice;
            processResult(userChoice, computerChoice);
        })
    })
}

