var wordList = ["METROID", "CASTLEVANIA", "TETRIS", "DOOM", "CONTRA",];
var listSelect = Math.floor(Math.random() * wordList.length);
var word = wordList[listSelect];
var underscore = [];
var rightGuess = [];
var wrongGuess = [];
var guessesLeft = 5;

var underscoreText = document.getElementsByClassName("underscore");
var rightGuessText = document.getElementsByClassName("right-guess");
var wrongGuessText = document.getElementsByClassName("wrong-guess");
var guessesLeftText = document.getElementsByClassName("guesses-left");

function loadUnderscores() {
    for (i = 0; i < word.length; i++) {
        underscore.push("_");
    }
    console.log(underscoreText.innerHTML);
    underscoreText[0].innerHTML = underscore.join(" ");
}

document.addEventListener("keypress", function (event) {
    var keyGuess = String.fromCharCode(event.keyCode);
    var upperKeyGuess = keyGuess.toUpperCase();
    if (wrongGuess.length > 4) {
        alert("You Lose");
    }
    else {
        if (word.indexOf(upperKeyGuess) > -1) {
            if (rightGuess.indexOf(upperKeyGuess) < 0) {
                for (i = 0; i < word.length; i++) {
                    if (word.charAt(i) == upperKeyGuess) {
                        if (rightGuess.indexOf(upperKeyGuess) < 0) {
                            rightGuess.push(upperKeyGuess);
                        }
                        underscore[i] = upperKeyGuess;
                        underscoreText[0].innerHTML = underscore.join(" ");
                        rightGuessText[0].innerHTML = rightGuess;
                    }
                }
                if (underscore.join("") == word) {
                    alert("You Win!")
                    window.location.reload();
                }
            }
        }
        else {
            if (wrongGuess.length > 4) {
                alert("You Lose");
                window.location.reload();
            }
            else {
                if (wrongGuess.indexOf(upperKeyGuess) < 0) {
                    wrongGuess.push(upperKeyGuess);
                    wrongGuessText[0].innerHTML = wrongGuess;
                    guessesLeft--;
                    guessesLeftText[0].innerHTML = guessesLeft;
                }
            }
        }
    }
});
