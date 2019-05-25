/* Initializing game by declaring variables and creating empty fields */
let guessingWord = [];
let words = ["pizza","tacos"];
let word = words[Math.floor(Math.random() * words.length)];
let wordChars = word.length;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let typedLetters = [];
let turns = 0; /* using to end game once 9 wrong guesses typed */
let wins = 0;
let losses = 0;

for (let i = 0; i < wordChars; i++) {
    guessingWord[i] = "_";
}

document.getElementById("emptyFields").innerHTML = guessingWord.join(" "); /* Display blanks fields into page */


/* Capturing User's Letters and confirming if in word */
document.onkeydown = function (event) {

        if (alphabet.includes(event.key) && !typedLetters.includes(event.key) && word.includes(event.key)) { /* checking valid letter and not already typed and if correct */
            
            checkLetterInWord(event.key);
        } 
        else if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { /* checking valid letter and not already typed */

            checkWrongLetter(event.key);
        }
        else{

            checkKeyLetterAndDupe();
        }     
}

function checkLetterInWord(letter){
    if (guessingWord.includes("_") && turns < 4) {
        for (let i = 0; i < wordChars; i++) {
            if (word[i] === letter) {
                guessingWord[i] = letter;
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");

                if (!guessingWord.includes("_")) { /* exits the function once there are not anymore blanks fields for letters to be guessed this might have to be inserted in if statement */
                    wins++;
                    playWinAudio();
                    alert("You won! " + wins);
                    resetGame();
                    return;
                }
            }
            else {
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");
            }
        }
    } 
}

function checkWrongLetter(letter){

    if(guessingWord.includes("_") && turns < 4){
            
        typedLetters.push(letter);
        document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");  /*  inputting each incorrect letter typed into array */
        turns +=1;
        document.getElementById("guessRemaining").innerHTML = parseInt(4 - turns); 
            
            if(turns === 4){ /* exits the functions with 9 wrong guessesthis might have to be inserted in else if */
                losses ++; 
                playLoseAudio();
                alert("You lost! The word was "+word +losses);
                resetGame();
                return;
        }
    }
}

function checkKeyLetterAndDupe(){

    if(guessingWord.includes("_") && turns < 4){
        alert("Not a valid letter or already guessed");
        return;
    }
}

function playWinAudio(){
    let x = document.getElementById("myWinAudio");
    x.play();
}

function playLoseAudio(){
    let y = document.getElementById("myLoseAudio");
    y.play();
}

function resetGame(){
    turns = 0;
    word = words[Math.floor(Math.random() * words.length)];
    guessingWord = [];
    typedLetters = [];
    wordChars = word.length;

    for (let i = 0; i < wordChars; i++) {
        guessingWord[i] = "_";
    }
    document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");
    document.getElementById("guessRemaining").innerHTML = parseInt(4 - turns);
}





