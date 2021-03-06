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
// var soundCorrect = new Audio
// var soundIncorrect = new Audio
// function to beging the quit 
function beginQuiz() {
    var beginningEl = document.getElementById("beginning");
    beginningEl.setAttribute("class", "hidden");
    // remove the hidden element upon beginning the quiz to show questions
    questionsEl.removeAttribute("class");
    // set countdown to go down by a second
    timeLimitId = setInterval(timeDown, 1000);
    // display the countdown
    timeLimitEl.textContent = time;
    // start the get question funciton
    getQuestion();
};
// function to get the question and cycle through
function getQuestion() {
    // gets questions from the current question bank
    var activeQuestion = questions[currentQuestionBank];
    // pulls the div element of question head to display the head in the question function
    var headEl = document.getElementById("question-head");
    headEl.textContent = activeQuestion.head;

    optionsEl.innerHTML = "";
    // added a button to each multiple choice option for the user to select
    activeQuestion.options.forEach(function(option, i) {
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "options");
        optionNode.setAttribute("value", option);
        optionNode.textContent = i + 1 + ". " + option;

        optionNode.onclick = questionInteraction;
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
        // soundIncorrect.play();
        criticismEl.textContent = "Incorrect!";
    } else {
        // play sound effect for correct answers
        // soundCorrect.play();
        criticismEl.textContent = "Correct!";
    }
    // show right/wrong ciriticism on page briefly
    criticismEl.setAttribute("class", "criticism");
    setTimeout(function() {
        criticismEl.setAttribute("class", "criticism hidden");
    }, 1000);
    
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
    clearInterval(timeLimitId);

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
    // set users initials and trim value to get rid of white space
    var initials = initialsEl.value.trim();

    // ensuring values are not empty
    if (initials !== "") {
        // display previous high scores or if there are none yet itll go to an empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        // show user score and names based on scores.js file
        var newScore = {
            score: time,
            name: initials
        };
        // save the new highscore to localStorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        // lastly send user to the highscores page to display their new highscore
        window.location.href = "highscores.html";
    }

}

// function to save initials? 
submitBtn.onclick = saveScores;

// user clicks the begin quiz button to begin the quiz
beginBtn.onclick = beginQuiz;