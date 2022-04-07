// this was all very new and complicated to me. I worked pretty closely with my tutor and a software engineer JS friend not in class to make this work and understand
// I learned a lot though comments to follow to explain what the code is doing
function showHighscores() {
    // set javascript object to a string to receive highscores from local storage OR set the scores to an empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
// this will sort the high scores property in the correct order high to low as intended for highscores to display
    highscores.sort(function(a,b) {
        return b.score -a.score;
    });

    highscores.forEach(function(score) {
        // will create a list for each high score 
        var liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score.score;
        // then display the list on the highscores page and append it to look fluid
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}
// clear the highscores upon clicking the clear button
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// runs the show highscores function upon page load
showHighscores();