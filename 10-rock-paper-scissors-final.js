const resultPara = document.body.querySelector('.js-result');
const movesPara = document.body.querySelector('.js-moves');
const scorePara = document.body.querySelector('.js-score');

const moves = ['rock', 'paper', 'scissors'];

let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    loses: 0,
    ties: 0
};

scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;

function pickMove(moves) {
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function result(myMove, computerMove) {
    if (
        myMove === 'rock' && computerMove === 'rock' ||
        myMove === 'paper' && computerMove === 'paper' ||
        myMove === 'scissors' && computerMove === 'scissors'
    ) {
        score.ties++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'Tie!';
    }
    else if (
        myMove === 'rock' && computerMove === 'scissors' ||
        myMove === 'paper' && computerMove === 'rock' ||
        myMove === 'scissors' && computerMove === 'paper'
    ) {
        score.wins++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'You win!';
    }
    else {
        score.loses++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'You Lose mf !';
    }
}

function printScore(myMove, computerMove, score) {
    resultPara.innerHTML = `${result(myMove, computerMove)}`;
    movesPara.innerHTML = `
            You
            <img src="images/${myMove}.png" class="move-icon" alt="">
            <img src="images/${computerMove}.png" class="move-icon" alt="">
            Computer`;
    scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function resetScore(score) {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    resultPara.innerHTML = '';
    movesPara.innerHTML = '';
    scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function rock() {
    let computerMove = pickMove(moves);
    printScore('rock', computerMove, score);
}

function paper() {
    let computerMove = pickMove(moves);
    printScore('paper', computerMove, score);
}

function scissors() {
    let computerMove = pickMove(moves);
    printScore('scissors', computerMove, score);
}