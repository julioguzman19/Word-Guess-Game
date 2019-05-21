/* use this to start game with the press of any key */
/* document.onkeyup = function (event) {
    event.key
} */

/* Initializing game by creating empty fields */
/* 3 will be changed to number randomizer based on word */
let guessingWord = "";
let words = ["goku","frieza"];
let word = words[Math.floor(Math.random() * words.length)];
let wordChars = word.length;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let typedLetters = [];

for (var i = 0; i < wordChars; i++) {
    guessingWord += "_ ";
}

document.getElementById("emptyFields").innerHTML = guessingWord; /* Display blanks fields into page */

/* Capturing User's Letters and confirming if in word */
document.onkeyup = function (event) {
   
    if (alphabet.includes(event.key) && !typedLetters.includes(event.key) && word.includes(event.key)) { /* checking valid letter and not already typed and if correct */
        
        /* index of wont give you multiple positions of letter i think */
        for (var i = 0; i < wordChars; i++) { 
            if(word.charAt(i) === event.key){
                guessingWord.charAt(i) = event.key;
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");
            }
            else{
                guessingWord.charAt(i) = "_"
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");
            }
        }
        
    } 
    else if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { /* checking valid letter and not already typed */
        alert("Guessed letter");
        typedLetters.push(event.key);
        document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");  /*  inputting each character typed into array */
    }
    else{
        alert("Not a valid character or already guessed");
    }
 
}





