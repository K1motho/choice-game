let scores = {
    wins: 0,
    losses: 0,
    ties: 0
};

const choices = ['rock', 'paper', 'makasi'];

const computer = {
    choice: function() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }
};

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('makasi').addEventListener('click', function() {
    playGame('makasi');
});

// Add event listener to "Start Game" button
document.getElementById('startGame').addEventListener('click', function() {
    resetGame();
});

// Core game logic
function playGame(userChoice) {
    const computerChoice = computer.choice();
    let result = '';

    // Update choices display
    document.getElementById('userChoice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;

    // Determine the result
    if (userChoice === computerChoice) {
        result = "It's a tie!";
        scores.ties++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'makasi') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'makasi' && computerChoice === 'paper')
    ) {
        result = "You win!";
        scores.wins++;
    } else {
        result = "You lose!";
        scores.losses++; // Fixed spelling here
    }

    // Update result display
    document.getElementById('result').textContent = result;
    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('wins').textContent = scores.wins;
    document.getElementById('losses').textContent = scores.losses;
    document.getElementById('ties').textContent = scores.ties;
}

function resetGame() {
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('userChoice').textContent = '';
    document.getElementById('computerChoice').textContent = '';
    updateScoreboard();
}
