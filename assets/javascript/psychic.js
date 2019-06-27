var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];


var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);


document.onkeypress = function(event) {

    var userGuess = event.key;
 
 
    if (userGuess === computerChoice) {
        wins++
        alert("You win!");
        document.getElementById("win").innerHTML = "Win: " + wins;
        guesses = 10;
        document.getElementById("remaining").innerHTML = "remaining: " + guesses;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        guessedLetters = [];
        document.getElementById("yourletter").innerHTML = "Your guesses: " + guessedLetters;
 
 
    }
    else {
        guesses --;
        guessedLetters.push(userGuess);
        document.getElementById("yourletter").innerHTML = "Your guesses: " + guessedLetters;
        document.getElementById("remaining").innerHTML = "Guesses Left: " + guesses;
    }
 
    if (guesses === 0) {
        losses ++;
        alert("You lose!");
        guesses = 10;
        document.getElementById("yourletter").innerHTML = "Guesses Left: " + guesses;
        document.getElementById("loss").innerHTML = "Losses: " + losses;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        guessedLetters = [];
        document.getElementById("yourletter").innerHTML = "Your guesses : " + guessedLetters;
    }
 
 }


