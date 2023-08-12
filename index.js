let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

let messageEl = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");

rollBtn.addEventListener("click", function() {
    const dice = Math.floor(Math.random() * 6 ) + 1;

    if(player1Turn) {
        player2Dice.classList.add("active");
        player1Dice.classList.remove("active");
        player1Dice.textContent = dice;
        messageEl.textContent = "Player 2 Turn";
    } else {
        player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
        player2Dice.textContent = dice;
        messageEl.textContent = "Player 1 Turn";
    }

    player1Turn = !player1Turn;
})