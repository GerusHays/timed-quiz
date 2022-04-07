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

    // reduce time 

    // show the time on page 

    // play sound effect for incorrect answers

    // play sound effect for correct answers

    // move to next question

    // check for if there are more questions or add a remaining question function?
}

// function to end the quiz
function stopQuiz() {

}

// function for the timer to countdown
function timeDown() {
    time--;
    timeLimitEl.textContent = time;
    console.log(typeof time);
};

// function to save the high scores
function saveScores() {

}

// function to save initials? 


beginBtn.onclick = beginQuiz;