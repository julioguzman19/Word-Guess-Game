/* Initializing game by declaring variables and creating empty fields */
let guessingWord = [];
let words = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
            "eighteen","nineteen","twenty","twentyone","twentytwo","twentythree","twentyfour","twentyfive","twentysix","twentyseven","twentyeight",
            "twentynine","thirty","thirtyone","thirtytwo","thirtythree","thirtyfour","thirtyfive","thirtysix","thirtyseven","thirtyeight","thirtynine",
            "forty","fortyone","fortytwo","fortythree","fortyfive","fortysix","fortyseven","fortyeight","fortynine","fifty","fiftyone",
            "fiftytwo","fiftythree","fiftyfour","fiftyfive","fiftysix","fiftyseven","fiftyeight","fiftynine","sixty"];
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
document.getElementById("guessRemaining").innerHTML = 3; /* Display turns */
document.getElementById("totalWins").innerHTML = wins;
document.getElementById("totalLosses").innerHTML = losses;


/* Capturing User's Letters and confirming if in word */
document.onkeydown = function (event) {
        
        stopAudio();

        if (alphabet.includes(event.key) && !typedLetters.includes(event.key) && word.includes(event.key)) { /* checking valid letter and not already typed and if correct */
            
            checkLetterInWord(event.key);
        } 
        else if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { /* checking valid letter and not already typed */

            checkWrongLetter(event.key);
        }
  /*       else{

            checkKeyLetterAndDupe();
        }   */   
        
}

function checkLetterInWord(letter){
    if (guessingWord.includes("_") && turns < 3) {
        for (let i = 0; i < wordChars; i++) {
            if (word[i] === letter) {
                guessingWord[i] = letter;
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");

                if (!guessingWord.includes("_")) { /* exits the function once there are not anymore blanks fields for letters to be guessed this might have to be inserted in if statement */
                    wins++;
                    document.getElementById("totalWins").innerHTML = wins;
                    playWinAudio();
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

    if(guessingWord.includes("_") && turns < 3){
            
        typedLetters.push(letter);
        document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");  /*  inputting each incorrect letter typed into array */
        turns +=1;
        document.getElementById("guessRemaining").innerHTML = parseInt(3 - turns); 
            
        if (turns === 3) { /* exits the functions with 9 wrong guessesthis might have to be inserted in else if */
            losses++;
            playLoseAudio();
            document.getElementById("totalLosses").innerHTML = losses;
            resetGame();
            return;
        }
    }
}

function checkKeyLetterAndDupe(){

    if(guessingWord.includes("_") && turns < 3){
        alert("Not a valid letter or already guessed");
        return;
    }
}

function playWinAudio(){
    let audioWin = document.getElementById("myWinAudio");
    audioWin.play();
}

function playLoseAudio(){
    let audioLose = document.getElementById("myLoseAudio");
    audioLose.play();
}

function stopAudio(){
    let stopWinAudio = document.getElementById("myWinAudio");
    let stopLoseAudio= document.getElementById("myLoseAudio");
    stopWinAudio.pause();
    stopWinAudio.currentTime = 0.0;
    stopLoseAudio.pause();
    stopLoseAudio.currentTime = 0.0;
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
    document.getElementById("guessRemaining").innerHTML = parseInt(3 - turns);
    document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");

    
}





