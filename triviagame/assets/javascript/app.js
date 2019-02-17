var intervalId;
var timeRemaining = 30;
var correctAnswer;
var score = 0;
var currentQuestion = -1;

//An array of question objects. 
//'q' represents the questions, 'a1-a4' represents the answer choices, 'ca' represents the correct answer, and 'ai' represents the message shown on the answer screen.
var questions = [
    { q: "What is the name of the main antagonist's weapon in 'Final Fantasy VII'?", a1: "Muramasa", a2: "Masamune", a3: "Buster Sword", a4: "Longclaw", ca: "Masamune", ai: "Sephiroth's sword is called Masamune." },
    { q: "In 'Kingdom Hearts', which one of the following keyblades has the highest attack stat?", a1: "Oathbreaker", a2: "Ultima Weapon", a3: "Kingdom Key", a4: "Lionheart", ca: "Ultima Weapon", ai: "The most powerful keyblade in the first game is Ultima Weapon." },
    { q: "In the 'Fire Emblem' series, which weapon type is most effective against Lances?", a1: "Sword", a2: "Bow", a3: "Axe", a4: "Staff", ca: "Axe", ai: "Axes are most effective against Lances in Fire Emblem." },
    { q: "Which of the following is not a recruitable party member in 'Chrono Trigger'?", a1: "Magus", a2: "Frog", a3: "Robo", a4: "Lavos", ca: "Lavos", ai: "Lavos is actually the main antagonist in Chrono Trigger." },
    { q: "In 'Final Fantasy X', which one of Auron's body parts is nonfunctional?", a1: "Left Arm", a2: "Right Arm", a3: "Right Eye", a4: "His Brain", ca: "Right Eye", ai: "Contrary to popular belief, both of Auron's arms work. He is, however, missing an eye." },
]

function displayQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        $(".answer-container").hide();
        $(".score-info").text("Game Over! Your final score is: " + score);
        $(".score-container").show();
        clearInterval(intervalId);
    }
    else {
        $(".start-container").hide();
        $(".answer-container").hide();
        $(".game-container").show();
        $(".question").html("<h3>" + questions[currentQuestion].q + "</h3>");
        $("#a1").html("<h2>" + questions[currentQuestion].a1 + "</h2>");
        $("#a2").html("<h2>" + questions[currentQuestion].a2 + "</h2>");
        $("#a3").html("<h2>" + questions[currentQuestion].a3 + "</h2>");
        $("#a4").html("<h2>" + questions[currentQuestion].a4 + "</h2>");
        correctAnswer = questions[currentQuestion].ca;
        timeRemaining = 30;
        $(".time-remaining").html(timeRemaining);
    }
}

function countdownTimer() {
    timeRemaining--;
    $(".time-remaining").html(timeRemaining);
    if (timeRemaining <= 0) {
        timeRemaining = 30;
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text("Time's Up! " + questions[currentQuestion].ai);
        setTimeout(displayQuestion, 5000);
    }
}

$(".game-container").hide();
$(".answer-container").hide();
$(".score-container").hide();

$(".answer").click(function () {
    
    var selectedAnswer = "#" + $(this).attr('id');
    if ($(selectedAnswer).text() == correctAnswer) {
        score++;
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text('Correct! ' + questions[currentQuestion].ai);
    }
    else {
        $(".game-container").hide();
        $(".answer-container").show();
        $(".answer-info").text('Wrong! ' + questions[currentQuestion].ai);
    }
    setTimeout(displayQuestion, 5000);
});

$(".start-button").click(function () {
    $(".start-container").hide();
    $(".game-container").show();
    intervalId = setInterval(countdownTimer, 1000);
    displayQuestion();
});