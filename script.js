
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

        const intro = document.createElement('div');

        const again = document.createElement('button');

        const rock = document.createElement('button');

        const paper = document.createElement('button');

        const scissors = document.createElement('button');

        rock.setAttribute('id','rock');

        paper.setAttribute('id','paper');

        scissors.setAttribute('id','scissors');

        intro.classList.add('intro');
        
        content.classList.add('content');

        score.classList.add('score');

        scoretwo.classList.add('scoretwo');

        winner.classList.add('winner');

        again.classList.add('again');

        intro.textContent = "Play against the computer. First to 5 points wins !"

        again.textContent = "Play again ?";

        rock.innerHTML = '<img src="./images/rock.png">';

        paper.innerHTML = '<img src="./images/paper.png">';

        scissors.innerHTML = '<img src="./images/scissors.png">';

        body.appendChild(intro);
      
        body.appendChild(paper);

        body.appendChild(rock);

        body.appendChild(scissors);


        const buttons = document.querySelectorAll('button');


        buttons.forEach((button) => {

            button.addEventListener('click', () => {
                playRound(button.id,getComputerChoice())
    
            });
          });
        

        function playRound(playerSelection,computerSelection) 
        {
            let playerChoice = playerSelection.toUpperCase();


            body.appendChild(content);

            body.appendChild(score);

            body.appendChild(scoretwo);        

            if(playerChoice === computerSelection){

                content.textContent = 'It is a tie';
      
            }
            else if((playerChoice === 'ROCK') && (computerSelection === 'SCISSORS'))
            {
                playerPoints += 1;

                content.textContent = 'You won! Computer chose Scissors. Rock beats Scissors';

    
            }
            else if((playerChoice === 'PAPER') && (computerSelection === 'ROCK'))
            {
                playerPoints += 1;
                content.textContent = 'You won! Computer chose Rock. Paper beats Rock';
           
            }
            else if((playerChoice === 'SCISSORS') && (computerSelection === 'PAPER'))
            {
                playerPoints += 1;
                content.textContent = 'You won! Computer chose Paper. Scissors beats Paper';
              
            }
            
            else if((computerSelection === 'ROCK') && (playerChoice === 'SCISSORS'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Rock. Rock beats Scissors';
              
            }
            else if((computerSelection === 'PAPER') && (playerChoice === 'ROCK'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Paper. Paper beats Rock';
            
            }
            else if((computerSelection === 'SCISSORS') && (playerChoice === 'PAPER'))
            {
                computerPoints += 1;
                content.textContent = 'You Lose! Computer chose Scissors. Scissors beats Paper';
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

                body.setAttribute('style', 'color: black; background: rgb(50,205,50);');

                playAgain();

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

                body.setAttribute('style', 'color: white; background: rgb(255,99,71);');


                playAgain();


                // alert('Do you want to play again ?');

                // make this disappear after the end of a round 

                // a message on the screen in the form of a prompt (?) or 
                // text on the screen with a button  asking 
                // if the user wants t play another round 

                // maybe i can make everything disappear before the start of the new round 
            }

    

        }

        function playAgain(){

            body.removeChild(intro);

            body.appendChild(again); 

            body.removeChild(paper);

            body.removeChild(rock);
    
            body.removeChild(scissors);

            again.addEventListener('click', function () {

                body.setAttribute('style', 'color: white; background: black;');


                body.removeChild(again); 

                body.removeChild(winner);

                body.appendChild(intro);


                body.appendChild(paper);

                body.appendChild(rock);
        
                body.appendChild(scissors);
              });


        }

       
         