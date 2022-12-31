
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

        const body = document.querySelector('body');

        const content = document.createElement('div');

        const score = document.createElement('div');

        const scoretwo = document.createElement('div');

        const winner = document.createElement('div');
        
        content.classList.add('content');

        score.classList.add('score');

        scoretwo.classList.add('scoretwo');

        winner.classList.add('winner');


        // body.appendChild(content);

        // body.appendChild(score);

        // body.appendChild(scoretwo);

        // body.appendChild(winner);



        const buttons = document.querySelectorAll('button');


        buttons.forEach((button) => {

            // and for each one we add a 'click' listener
            button.addEventListener('click', () => {
                playRound(button.id,getComputerChoice())
            //   console.log(button.id);
            });
          });
        

        function playRound(playerSelection,computerSelection) 
        {
            let playerChoice = playerSelection.toUpperCase();


            body.appendChild(content);

            body.appendChild(score);

            body.appendChild(scoretwo);

            // body.removeChild(winner);
        

            if(playerChoice === computerSelection){

                content.textContent = 'It is a tie';
                // console.log('It is a tie');
                // return 'It is a tie';
            }
            else if((playerChoice === 'ROCK') && (computerSelection === 'SCISSORS'))
            {
                playerPoints += 1;

                content.textContent = 'You won! Computer chose Scissors. Rock beats Scissors';

                // console.log('You won! Computer chose Scissors. Rock beats Scissors');
                // return 'You won! Computer chose Scissors. Rock beats Scissors'
            }
            else if((playerChoice === 'PAPER') && (computerSelection === 'ROCK'))
            {
                playerPoints += 1;
                content.textContent = 'You won! Computer chose Rock. Paper beats Rock';
                // console.log('You won! Computer chose Rock. Paper beats Rock');
                // return 'You won! Computer chose Rock. Paper beats Rock'
            }
            else if((playerChoice === 'SCISSORS') && (computerSelection === 'PAPER'))
            {
                playerPoints += 1;
                content.textContent = 'You won! Computer chose Paper. Scissors beats Paper';
                // console.log('You won! Computer chose Paper. Scissors beats Paper');
                // return 'You won! Computer chose Paper. Scissors beats Paper'
            }
            
            else if((computerSelection === 'ROCK') && (playerChoice === 'SCISSORS'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Rock. Rock beats Scissors';
                // console.log('You Lose! Computer chose Rock. Rock beats Scissors');
                // return 'You Lose! Computer chose Rock. Rock beats Scissors'
            }
            else if((computerSelection === 'PAPER') && (playerChoice === 'ROCK'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Paper. Paper beats Rock';
                // console.log('You Lose! Computer chose Paper. Paper beats Rock');
                // return 'You Lose! Computer chose Paper. Paper beats Rock'
            }
            else if((computerSelection === 'SCISSORS') && (playerChoice === 'PAPER'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Scissors. Scissors beats Paper';
                // console.log('You Lose! Computer chose Scissors. Scissors beats Paper');
                // return 'You Lose! Computer chose Scissors. Scissors beats Paper'
            }

            score.textContent = 'Player Points: '  + playerPoints;
            scoretwo.textContent = 'Computer Points: '  + computerPoints;

            endGame();
          
        }

        function endGame(){

            if(playerPoints === 5){

                winner.textContent = 'YOU WON ! You are the first to 5 points.';
                playerPoints = 0;
                computerPoints = 0;


                body.removeChild(content);

                body.removeChild(score);
    
                body.removeChild(scoretwo);
    
                body.appendChild(winner); 
                // at this point the winning message will appear 
                // just need to figure out a way to introduce a message 
                // on the screen asking if the player wants to 
                // play again which will also make the winning message 
                // dissappear 
                // probably put a call to another function here
                // with the message asking if the player wants to play 
                // again and either 'yes' or 'no' will take the user
                // back to to original state 
                

                
            }
            else if(computerPoints === 5){

                winner.textContent = 'You Lose ! The computer was first to 5 points.';
                playerPoints = 0;
                computerPoints = 0;

                body.removeChild(content);

                body.removeChild(score);
    
                body.removeChild(scoretwo);
    
                body.appendChild(winner); 


                // alert('Do you want to play again ?');

                // make this disappear after the end of a round 

                // a message on the screen in the form of a prompt (?) or 
                // text on the screen with a button  asking 
                // if the user wants t play another round 

                // maybe i can make everything disappear before the start of the new round 
            }

    

        }

       
         