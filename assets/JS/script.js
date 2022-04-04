// the following keeps track of the status of the quiz
var currentQuestionBank = 0;
var time = questions.length * 15;
var timerId;

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