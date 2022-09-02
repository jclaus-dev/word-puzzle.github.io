const transBackground = document.querySelector(".transBackground");

// Popup schließen Button
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    transBackground.classList.remove("transBackground");
});

// Popup Worträtsel starten Button
document.querySelector(".start-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    transBackground.classList.remove("transBackground");
});


// ##### Difficulty Buttons #####
const easy = document.querySelector(".difficulty-checkbox > .easy-checkbox");
const medium = document.querySelector(".difficulty-checkbox > .medium-checkbox");
const hard = document.querySelector(".difficulty-checkbox > .hard-checkbox");

document.querySelector(".difficulty-checkbox > .easy-checkbox").addEventListener("click", function() {
    if (easy.checked = true) {
        medium.checked = false;
        hard.checked = false;
    } 
})

document.querySelector(".difficulty-checkbox > .medium-checkbox").addEventListener("click", function() {
    if (medium.checked = true) {
        easy.checked = false;
        hard.checked = false;
    } 
    document.querySelector(".details > p:first-of-type").remove(); 
    // initTimer(60);
})

document.querySelector(".difficulty-checkbox > .hard-checkbox").addEventListener("click", function() {
    if (hard.checked = true) {
        easy.checked = false;
        medium.checked = false;
    } 
    document.querySelector(".details > p:first-of-type").remove(); 
    document.querySelector(".details > p:last-of-type > span > b").textContent = "30";
    // initTimer(30);
})


// ##### Language Buttons #####
language_german = document.querySelector(".de"),
language_english = document.querySelector(".en");

document.querySelector(".de").addEventListener("click", function() {
    if (language_german.checked = true) {
        language_english.checked = false;  
    } 
})

document.querySelector(".en").addEventListener("click", function() {
    if (language_english.checked = true) {
        language_german.checked = false;  
        closeBtn.addEventListener("click", initGame_EN);
        startBtn.addEventListener("click", initGame_EN);
        refreshBtn.addEventListener("click", initGame_EN);
        checkBtn.addEventListener("click", checkWord);
        // initTimer(60);
    } 
})






