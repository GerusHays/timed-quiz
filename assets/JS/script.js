// the following keeps track of the status of the quiz
var currentQuestionBank = 0;
var time =  100 ;
var timeLimitId;

// variables connecting to html DOM elements
var timeLimitEl = document.getElementById("time-limit");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var initialsEl = document.getElementById("initials");
var criticismEl = document.getElementById("criticism");
var beginBtn = document.getElementById("begin");
var submitBtn = document.getElementById("submit");

// sounds for right and wrong answers
var soundCorrect = new Audio
var soundIncorrect = new Audio

function beginQuiz() {
    var beginningEl = document.getElementById("beginning");
    beginningEl.setAttribute("class", "hidden");

    questionsEl.removeAttribute("class");

    timeLimitId = setInterval(timeDown, 1000);

    timeLimitEl.textContent = time;

    getQuestion();
};

function getQuestion() {
    var activeQuestion = questions[currentQuestionBank];

    var headEl = document.getElementById("question-head");
    headEl.textContent = activeQuestion.head;

    optionsEl.innerHTML = "";

    activeQuestion.options.forEach(function(option, i) {
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "options");
        optionNode.setAttribute("value", option);
        optionNode.textContent = i + 1 + ". " + option;

        optionNode.onclick = questionInteraction();
        optionsEl.appendChild(optionNode);
    });
}

function questionInteraction() {
    // upon interacting with the question i want to...
    // check if user guessed wrong..
    if (this.value !== questions[currentQuestionBank].answer) {
        // reduce time 
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        // show the time on page
        timeLimitEl.textContent = time;
        // play sound effect for incorrect answers
        soundIncorrect.play();
        criticismEl.textContent = "Incorrect!";
    } else {
        // play sound effect for correct answers
        soundIncorrect.play();
        criticismEl.textContent = "Correct!";
    }
    // show right/wrong ciriticism on page briefly
    criticismEl.setAttribute("class", "criticism");
    setTimeout(function() {
        criticismEl.setAttribute("class", "criticism hide");
    }, 500);
    
    // move to next question
    currentQuestionBank++;
    // check for if there are more questions or add a remaining question function?
    if (currentQuestionBank === questions.length) {
        stopQuiz();
    } else {
        getQuestion();
    }
}

// function to end the quiz
function stopQuiz() {
    // upon the quiz stopping ensure the timer stops
    clearInterval(timerId);

    // display the end screen and congragulate user on finishing quiz
    var stopEL = document.getElementById("stop");
    stopEL.removeAttribute("class");

    // display final score to user
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide the questions section once quiz stops 
    questionsEl.setAttribute("class", "hidden");
}

// function for the timer to countdown
function timeDown() {
    // actually countsdown subtracting by 1 second 
    time--;
    timeLimitEl.textContent = time;
    // if user runs out of time stop the quiz
    if (time <= 0) {
        stopQuiz();
    }
    // console.log(typeof time);
};

// function to save the high scores
function saveScores() {

}

// function to save initials? 


beginBtn.onclick = beginQuiz;