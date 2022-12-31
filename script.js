
        let playerPoints = 0 ; 
        let computerPoints = 0 ;

       function getComputerChoice() {

        let choice = Math.random(0,1);

        if(choice < 0.33)
            {
                return 'ROCK'
            }
        else if(choice > 0.66)
            {
                return 'PAPER'
            }
        else
            {
                return 'SCISSORS' 
            }

        }

        function playRound(playerSelection,computerSelection) 
        {
            let playerChoice = playerSelection.toUpperCase();

            if(playerChoice === computerSelection){
                console.log('It is a tie');
                return 'It is a tie';
            }
            else if((playerChoice === 'ROCK') && (computerSelection === 'SCISSORS'))
            {
                playerPoints += 1;
                console.log('You won! Computer chose Scissors. Rock beats Scissors');
                return 'You won! Computer chose Scissors. Rock beats Scissors'
            }
            else if((playerChoice === 'PAPER') && (computerSelection === 'ROCK'))
            {
                playerPoints += 1;
                console.log('You won! Computer chose Rock. Paper beats Rock');
                return 'You won! Computer chose Rock. Paper beats Rock'
            }
            else if((playerChoice === 'SCISSORS') && (computerSelection === 'PAPER'))
            {
                playerPoints += 1;
                console.log('You won! Computer chose Paper. Scissors beats Paper');
                return 'You won! Computer chose Paper. Scissors beats Paper'
            }
            
            else if((computerSelection === 'ROCK') && (playerChoice === 'SCISSORS'))
            {
                computerPoints += 1;
                console.log('You Lose! Computer chose Rock. Rock beats Scissors');
                return 'You Lose! Computer chose Rock. Rock beats Scissors'
            }
            else if((computerSelection === 'PAPER') && (playerChoice === 'ROCK'))
            {
                computerPoints += 1;
                console.log('You Lose! Computer chose Paper. Paper beats Rock');
                return 'You Lose! Computer chose Paper. Paper beats Rock'
            }
            else if((computerSelection === 'SCISSORS') && (playerChoice === 'PAPER'))
            {
                computerPoints += 1;
                console.log('You Lose! Computer chose Scissors. Scissors beats Paper');
                return 'You Lose! Computer chose Scissors. Scissors beats Paper'
            }

        }

        function game(){

        

            for (let i = 0; i < 5; i++) {
                
                let playerSelection = prompt("Rock, paper or scissors");
                playRound(playerSelection, getComputerChoice());
    
             };

             if(playerPoints > computerPoints)
                {

                    console.log('You Won, you have ' + playerPoints + ' points. The computer has ' + computerPoints + ' points.');
                    playerPoints = 0 ; 
                    computerPoints = 0 ;
                    
                }
                else if(computerPoints > playerPoints)
                {
                    console.log('You Lose, you have ' + playerPoints + ' points. The computer has ' + computerPoints + ' points.');
                    playerPoints = 0 ; 
                    computerPoints = 0 ;
                }
                else
                {

                    console.log('It is a tie, you have ' + playerPoints + ' points. The computer has ' + computerPoints + ' points.')
                    playerPoints = 0 ; 
                    computerPoints = 0 ;
                }


        }

       
         