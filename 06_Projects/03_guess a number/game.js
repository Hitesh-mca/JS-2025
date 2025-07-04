let randomNumber=parseInt(Math.random()*100+1);

const userInput=document.querySelector('#guessInput');
const submit=document.querySelector('#submitBtn');
const prevGuessesStore=document.querySelector('#prevGuesses');
const remaining=document.querySelector('#RemainingGuesses');
const mess=document.querySelector('.messageAre');


 const p=document.createElement('p');

 let prevGues=[];
 let numGuess=1;

 let playGame=true;
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const btnText = submit.textContent.trim();
        if(btnText === 'Submit guess'){
            const guess=parseInt(userInput.value);
            validateGuess(guess);
        }
        if(btnText ==='New Game'){
            prevGuessesStore.innerHTML="";
            remaining.innerHTML=4;
            submit.textContent="Submit guess";
            mess.innerHTML=""
            randomNumber=parseInt(Math.random()*100+1);
            userInput.removeAttribute('disabled')
            numGuess=1;
            playGame=true;
        }
        
    })
   
}
 function validateGuess(guess){
    //check number between 1 to 100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1 || guess>100){
        alert('Please enter number in rang 1 to 100')
    }else{
        prevGues.push(guess)
        if (numGuess>=4){
            displayGuess(guess)
            displayMessage(`Game over Random number was ${randomNumber} Press New game button for play agin`)
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
        displayMessage('You gessed it right')
    }else if(guess < randomNumber){
        displayMessage('You gessese number is to low')
    }else if(guess > randomNumber){
        displayMessage('You gessese number is to heigh')
    }
 }
 function displayMessage(message){
    //manipulation with DOM like clean value, change remaining guess
    mess.innerHTML=`<h2>${message}</h2>`;
 }
function displayGuess(guess){
    userInput.value=" ";
    prevGuessesStore.innerHTML +=`${guess}  , `;
    numGuess++;
    remaining.innerHTML=`${5-numGuess}`;
}

function endGame(){
    userInput.value=" ";
    userInput.setAttribute('disabled'," ");
    playGame=false
    submit.textContent="New Game";
}