
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

function game() {
        
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);


    if(computerTrackScore + playerTrackScore + tieTrackScore === 5){
        document.getElementById("rock").disabled = true; 
        document.getElementById("paper").disabled = true; 
        document.getElementById("scissors").disabled = true; 

        if(playerScore > computerScore){
            console.log(`You Win! Final Score: ${playerScore} to ${computerScore}`);
        }
        else if(playerScore < computerScore){
            console.log(`You Lose! Final Score: ${playerScore} to ${computerScore}`);
        }
        else {
            console.log(`It\'s a tie! Final Score: ${playerScore} to ${computerScore}`);
        }
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
        ++computerTrackScore;
        document.getElementById('computerAddPoint').innerHTML = computerScore;
        return 'You Lose! Paper Beats Rock. Try Again!';
        
    }

    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        ++playerScore;
        ++playerTrackScore;
        document.getElementById('userAddPoint').innerHTML = playerScore;
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
        document.getElementById('computerAddPoint').innerHTML = computerScore;
        return 'You Lose! Scissors Beats Paper';
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userAddPoint').innerHTML = playerScore;
        return 'You Win! Paper Beats Rock.';
    }

    // If Player picks Scissors
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        ++playerScore
        ++playerTrackScore;
        document.getElementById('userAddPoint').innerHTML = playerScore;
        return 'You Win! Scissors Beats Paper.';
    }

    else if ( playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        ++tieTrackScore;
        return 'It\'s a Tie!';
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        ++computerScore;
        ++computerTrackScore;
        document.getElementById('computerAddPoint').innerHTML = computerScore;
        return 'You Lose! Rock Beats Scissors.';
    }
}
