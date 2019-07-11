
var gamePool = ["g","o","d","f","a","t","h","e","r"];

var gameGuess = gamePool[Math.floor(Math.random() * gamePool.length)];

var wins = 0, losses = 0, totalGames = 0, guessesLeft = 5, guessed = "", gameOver = "Game is Over";

function clean(input) {
    var letter = input.charAt(0);
    letter = letter.toLowerCase();
    return letter;
} 
    
while((userGuess !== gameGuess) && (guessesLeft > 0)) {

    var userGuess = prompt("Guess what letter i'm thinking?");
    userGuess = clean(userGuess);
    guessed = guessed + userGuess;
    document.getElementById("guessed").innerHTML = guessed;

    guessesLeft--;
    document.getElementById("guess-left").innerHTML = guessesLeft;

}

if (userGuess === gameGuess) {
    alert("You Won!!!");
    wins++;
    losses = 0;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
  // Add code for loser
  } else {
    alert("You lost :(");
    losses++;
    wins = 0;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("win").innerHTML = wins;
  }
 
    
