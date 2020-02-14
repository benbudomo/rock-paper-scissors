
let playerScore = 0;
let computerScore = 0;
let computerTrackScore = 0;
let playerTrackScore = 0;
let tieTrackScore = 0;

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

// Starts the game
function game() {
        
    const computerSelection = computerPlay();
    document.getElementById('gameMessages').innerHTML = (playRound(playerSelection, computerSelection));
    // console.log('Player Score: ' + playerScore);
    // console.log('Computer Score: ' + computerScore);


    if(computerTrackScore + playerTrackScore + tieTrackScore === 5){
        document.getElementById("rock").disabled = true; 
        document.getElementById("paper").disabled = true; 
        document.getElementById("scissors").disabled = true; 

        if(playerScore > computerScore){
            document.getElementById('gameMessages').innerHTML = `You Win! Final Score: ${playerScore} to ${computerScore}`;
        }
        else if(playerScore < computerScore){
            document.getElementById('gameMessages').innerHTML = `You Lose! Final Score: ${playerScore} to ${computerScore}`;
        }
        else {
            document.getElementById('gameMessages').innerHTML = `It\'s a tie! Final Score: ${playerScore} to ${computerScore}`;
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
        document.getElementById('computerScore').innerHTML = 'Computer: ' + computerScore;
        return 'You Lose! Paper Beats Rock. Try Again!';
        
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        ++playerScore;
        ++playerTrackScore;
        document.getElementById('userScore').innerHTML = 'You: ' + playerScore;
        return 'You Win! Rock Beats Scissors' 
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        ++tieTrackScore;
        return 'It\'s a Tie!';
    }

    // If Player picks Paper
    if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return 'It\'s a Tie!';
    }

    else if ( playerSelection == 'Paper' && computerSelection == 'Scissors') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerScore').innerHTML = 'Computer :' + computerScore;
        return 'You Lose! Scissors Beats Paper';
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userScore').innerHTML = 'You: ' + playerScore;
        return 'You Win! Paper Beats Rock.';
    }

    // If Player picks Scissors
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userScore').innerHTML = 'You: ' + playerScore;
        return 'You Win! Scissors Beats Paper.';
    }

    else if ( playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        ++tieTrackScore;
        return 'It\'s a Tie!';
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerScore').innerHTML = 'Computer: ' + computerScore;
        return 'You Lose! Rock Beats Scissors.';
    }
}
