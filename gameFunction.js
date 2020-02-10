
let playerScore = 0;
let computerScore = 0;

function game () {

    alert('Thanks for playing Rock Paper Scissors! Click OK to continue.')

    for (let i = 0; i < 5; i++) {
        let askUser = prompt('Rock, Paper, or Scissors?', '');
        playerSelection = (askUser.charAt(0).toUpperCase() + askUser.substr(1).toLowerCase())
        
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
    }

    if (playerScore > computerScore) {
        console.log(`You Win! Final Score: ${playerScore} to ${computerScore}`);
    }

    else if (playerScore < computerScore) {
        console.log(`You Lose! Final Score: ${playerScore} to ${computerScore}`);
    }

    else {
        console.log(`It\'s a Tie! Final Score: ${playerScore} to ${computerScore}`);
    }

}

function computerPlay () {
    let computerArray = ['Rock', 'Paper', 'Scissors'];

    let computerDecision = Math.floor(Math.random()*computerArray.length)
    console.log('Computer picks ' + computerArray[computerDecision]);
    return computerArray[computerDecision];

}

function playRound(playerSelection, computerSelection) {
    //If Player picks Rock
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        ++computerScore;
        return 'You Lose! Paper Beats Rock. Try Again!';
        
    }

    else if ( playerSelection == 'Rock' && computerSelection == 'Scissors') {
        ++playerScore;
        return 'You Win! Rock Beats Scissors' 
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        return 'It\'s a Tie!';
    }

    // If Player picks Paper
    if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return 'It\'s a Tie!';
    }

    else if ( playerSelection == 'Paper' && computerSelection == 'Scissors') {
        ++computerScore;
        return 'You Lose! Scissors Beats Paper';
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        ++playerScore
        return 'You Win! Paper Beats Rock.';
    }

    // If Player picks Scissors
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        ++playerScore
        return 'You Win! Scissors Beats Paper.';
    }

    else if ( playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return 'It\'s a Tie!';
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        ++computerScore;
        return 'You Lose! Rock Beats Scissors.';
    }
}
