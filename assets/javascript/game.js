
var gamePool = ["g","o","d","f","a","t","h","e","r"];

var userGuess = prompt("Guess what letter i'm thinking?");

//var gameGuess = gamePool[Math.floor(Math.random() * gamePool.length)];

var wins = 0, losses = 0, totalGame = 0, guessesLeft = 5, guessed = " ", gameOver = "Game is Over";

function clean(userGuess) {
    var cleanUserGuess = userGuess.toLowerCase();
    return cleanUserGuess;
}
clean(userGuess); 
    
    
for(var i = 0; i < guessesLeft;i++) {
        
    var gameGuess = gamePool[i];
    clean(userGuess);
    alert("You guessed " + cleanUserGuess);
    alert("This game guessed " + gameGuess);
    guessed++;
 
    if(gameGuess.indexOf(cleanUserGuess.charAt(0)) === -1) {

        newGuessesLeft = guessesLeft--;
        totalGame++;
        alert("You have " +newGuessesLeft+" guesses left. Try again");
        document.getElementById("guess-left").innerHTML = newGuessesLeft;
        // document.getElementById("guessed").innerHTML = ?;
        if(newGuessesLeft === 0) {
           alert("You Lost. "+gameOver);
           totalLosses = losses++;
           totalGame++;
           document.getElementById("loss").innerHTML = totalLosses;
        }else{
           clean(userGuess);
        }
        
    }else{
        alert("you win. "+gameOver);
        totalWins = wins++;
        totalGame++;
        document.getElementById("win").innerHTML = totalWins;
    }

}
    
