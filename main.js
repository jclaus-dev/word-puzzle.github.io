"use strict";

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timerText = document.querySelector(".time b"),
inputField = document.querySelector("input[type=text]"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
closeBtn = document.querySelector("#close"),
startBtn =  document.querySelector(".start-btn");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; // decrement maxTime by -1 
            return timerText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Die Zeit ist abgelaufen! ${correctWord.toUpperCase()} war das richtige Wort`);
        initGame(); // calling initGame function, so the game restart
    }, 1000);
}

const initGame = () => {
    // calling initTimer function with passing 30 as maxTime value
    let randomObj = words_de[Math.floor(Math.random() * words_de.length)]; // getting random object from word
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // geting random number
        // shuffling and swiping wordArray letters randomly 2
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); // passing shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase(); // passing random word to correct Word
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); // setting input maxlenght attr value to word length
    if (hard.checked == true) {
        initTimer(30);
    } else {
        initTimer(60);
    }
}

const initGame_EN = () => {
    // calling initTimer function with passing 30 as maxTime value
    let randomObj = words_en[Math.floor(Math.random() * words_en.length)]; // getting random object from word
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // geting random number
        // shuffling and swiping wordArray letters randomly 2
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); // passing shuffled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase(); // passing random word to correct Word
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); // setting input maxlenght attr value to word length
    if (hard.checked == true) {
        initTimer(30);
    } else {
        initTimer(60);
    }
}

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord) return alert(`Bitte gebe ein Wort ein!`); // if user didnt´t enter anything

    // if user word doesnt matched with the correct word
    if(userWord !== correctWord) return alert(`Oops! ${userWord} ist nicht das richtige Wort`);
    
    // if above two if conditions are failed then show congrats alert because user word is correct
    alert(`Du hast es geschafft! ${userWord.toUpperCase()} ist das richtige Wort`);
}

document.querySelector(".container > .wort-container > .bx").addEventListener("click", function() {
    location.reload();
});

// Default Settings
closeBtn.addEventListener("click", initGame);
startBtn.addEventListener("click", initGame);
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
