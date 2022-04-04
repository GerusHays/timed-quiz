// the following keeps track of the status of the quiz
var currentQuestionBank = 0;
var time = questions.length * 15;
var timeLimitId;

// variables connecting to html DOM elements
var timeLimitEl = document.getElementById("time-limit");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var nameEl = document.getElementById("name");
var criticismEl = document.getElementById("criticism");
var beginBtn = document.getElementById("begin");
var submitBtn = document.getElementById("submit");

// sounds for right and wrong answers
var soundCorrect = new Audio
var soundIncorrect = new Audio

function beginQuiz() {
    var beginningEl = document.getElementById("beginning0");
    beginningEl.setAttribute("class", "hidden");

    questionsEl.removeAttribute("class");

    timeLimitId = setInterval(clockTick, 1000);

    timeLimitEl.textContent = time;

    getQuestion();
};

function getQuestion() {
    var activeQuestion = questions[currentQuestionBank];

    var headEl = document.getElementById("question-head");
    headEl.textContent = activeQuestion.head;

    optionsEl.innerHTML = "";

    activeQuestion.options.forEach(function(choice, i) {

    });
}