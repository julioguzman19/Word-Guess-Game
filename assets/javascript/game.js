/* Initializing game by creating empty fields */
/* 3 will be changed to number randomizer based on word */
let wordArray = [];

for (var i = 0; i < 3; i++) {
    wordArray[i] = "_";
}

document.getElementById("emptyFields").innerHTML = wordArray.join(" "); /* Display blanks fields into page */



/* Capturing User's Letters */
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let typedLetters = [];

document.onkeyup = function (event) {
   
    if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { /* checking valid letter and not already typed */
        typedLetters.push(event.key);/*  inputting each character typed into array */
        console.log(typedLetters);
    } 
    else {
        console.log("Not Valid Letter or already guessed");
    }
 
}

/* document.onkeyup = function (event) {
    event.key
} */



