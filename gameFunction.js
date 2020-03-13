
let playerScore = 0;
let computerScore = 0;
let computerTrackScore = 0;
let playerTrackScore = 0;
let tieTrackScore = 0;

// Starts the game
function game() {
        
    const computerSelection = computerPlay();
    document.getElementById('gameMessages').innerHTML = (playRound(playerSelection, computerSelection));

    if(computerTrackScore + playerTrackScore + tieTrackScore === 5) {
        document.getElementById('rock').disabled = true; 
        document.getElementById('paper').disabled = true; 
        document.getElementById('scissors').disabled = true; 
        
        document.getElementById('rock').style.cursor = 'not-allowed'; 
        document.getElementById('paper').style.cursor = 'not-allowed'; 
        document.getElementById('scissors').style.cursor = 'not-allowed';

        document.getElementById('gameButton').style.opacity = 0.6; 
        document.getElementById('gameButton').style.pointerEvents = 'none';

        if(playerScore > computerScore) {
            document.getElementById('gameMessages').innerHTML = `You Win! Final Score: ${playerScore} to ${computerScore}`;
            document.getElementById('playAgain').style.display = null;
        }
        else if(playerScore < computerScore) {
            document.getElementById('gameMessages').innerHTML = `You Lose! Final Score: ${playerScore} to ${computerScore}`;
            document.getElementById('playAgain').style.display = null;
        }
        else {
            document.getElementById('gameMessages').innerHTML = `It\'s a tie! Final Score: ${playerScore} to ${computerScore}`;
            document.getElementById('playAgain').style.display = null;

        }
    }    

}

// Randomly picks rock paper or scissors
function computerPlay () {
    let computerArray = ['Rock', 'Paper', 'Scissors'];
    let computerDecision = Math.floor(Math.random()*computerArray.length)
    document.getElementById('computerPicks').innerHTML = ('Computer picks ' + computerArray[computerDecision]);
    return computerArray[computerDecision];

}

// Compares player and computer selection
function playRound(playerSelection, computerSelection) {
    //If Player picks Rock
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerScoreBox').innerHTML = computerScore;
        return 'Paper Beats Rock';
        
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        ++playerScore;
        ++playerTrackScore;
        document.getElementById('userScoreBox').innerHTML = playerScore;
        return 'Rock Beats Scissors' 
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        ++tieTrackScore;
        return 'It\'s a Tie';
    }

    // If Player picks Paper
    if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        ++playerTrackScore;
        return 'It\'s a Tie';
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerScoreBox').innerHTML = computerScore;
        return 'Scissors Beats Paper';
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userScoreBox').innerHTML = playerScore;
        return 'Paper Beats Rock';
    }

    // If Player picks Scissors
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userScoreBox').innerHTML = playerScore;
        return 'Scissors Beats Paper';
    }

    else if ( playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        ++tieTrackScore;
        return 'It\'s a Tie';
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerScoreBox').innerHTML = computerScore;
        return 'Rock Beats Scissors';
    }
}

// Clicking functions
// If clicked, starts game and player clicks on one item below
rock.addEventListener('click', function (e) {
    playerSelection = 'Rock';
    game();
});

paper.addEventListener('click', function (e) {
    playerSelection = 'Paper';
    game();
});

scissors.addEventListener('click', function (e) {
    playerSelection = 'Scissors';
    game();
});

// Play again button that restarts game
playAgainButton.addEventListener('click', function(e) {
    playerScore = 0;
    computerScore = 0;
    computerTrackScore = 0;
    playerTrackScore = 0;
    tieTrackScore = 0;

    document.getElementById("rock").disabled = false; 
    document.getElementById("paper").disabled = false; 
    document.getElementById("scissors").disabled = false; 

    document.getElementById('computerPicks').innerHTML = ''
    document.getElementById('gameMessages').innerHTML = '';
    document.getElementById('userScoreBox').innerHTML = computerScore;
    document.getElementById('computerScoreBox').innerHTML = playerScore;

    document.getElementById("playAgain").style.display = 'none';
    document.getElementById('rock').style.cursor = null; 
    document.getElementById('paper').style.cursor = null; 
    document.getElementById('scissors').style.cursor = null;
    document.getElementById('gameButton').style.opacity = 1.0; 
    document.getElementById('gameButton').style.pointerEvents = null;
});
