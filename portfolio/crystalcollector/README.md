# Crystal Collector
### A simple math game made using jQuery.

Test it in your browser!: (https://hchen651.github.io/crystalcollector/index.html)

## How to play:
* Upon starting a new game, you will be given a random number between 20 and 120.
* Each crystal is assigned a random hidden value between 1 to 12. Clicking on a crystal will add its value to your total score.
* In order to win the game, your total score must match the number to guess. 
* If your total exceeds the number to guess, you lose!
* A new game is automatically started upon win or loss.
* If you want to forfeit the current round and start a new game, just click the button on the bottom.

## How does it work?
The HTML file contains the basic layout and divs, and assigns ids to each element. In the javascript file, the a random number to guess is generated upon page load. A loop generates the crystal elements and appends them to the appropriate div in the HTML file. Each crystal is also assigned a random value. A click event is tied to each crystal to add its hidden value to the total and check for a win or loss. Upon win or loss, the appropriate total is updated and parameters are reset to start a new game.