const randomNumber=parseInt(Math.random()*100+1);

const userInput=document.querySelector('#guessInput');
const submit=document.querySelector('#submitBtn');
const prevGuesses=document.querySelector('#prevGuesses');
const remaining=document.querySelector('#RemainingGuesses');
const startOver=document.querySelector('.lowerHigh');

 const p=document.createElement('p');

 let prevGues=[];
 let numGues=[];

 let playGame=true;
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
   
}
 function validateGuess(guess){
    //check number between 1 to 100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1 && guess>100){
        alert('Please enter number in rang 1 to 100')
    }else{
        prevGues.push(guess)
        if (numGues>11){
            displayGuess(guess)
            displayMessage(`Game over Random number was ${randomNumber} `)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 }
 function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage()
    }else if(guess < randomNumber){
        
    }
 }
 function displayMessage(message){
    //manipulation with DOM like clean value, change remaining guess

 }
function displayGuess(guess){

}
function newGame(){

}
function endGame(){

}