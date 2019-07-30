/* Initializing game by declaring variables and arrays*/
let guessingWord = [];
let words = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
            "eighteen","nineteen","twenty","twentyone","twentytwo","twentythree","twentyfour","twentyfive","twentysix","twentyseven","twentyeight",
            "twentynine","thirty","thirtyone","thirtytwo","thirtythree","thirtyfour","thirtyfive","thirtysix","thirtyseven","thirtyeight","thirtynine",
            "forty","fortyone","fortytwo","fortythree","fortyfive","fortysix","fortyseven","fortyeight","fortynine","fifty","fiftyone",
            "fiftytwo","fiftythree","fiftyfour","fiftyfive","fiftysix","fiftyseven","fiftyeight","fiftynine","sixty","sixtyone","sixtytwo",
            "sixtythree","sixtyfour","sixtyfive","sixtysix","sixtyseven","sixtyeight","sixtynine","seventy","seventyone","seventytwo","seventythree",
            "seventyfour","seventyfive","seventysix","seventyseven","seventyeight","seventynine","eighty"];
let word = words[Math.floor(Math.random() * words.length)];
let wordChars = word.length;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let typedLetters = [];
let turns = 0; /* using to end game once 9 wrong guesses typed */
let wins = 0;
let losses = 0;

/*Getting number of characters from word for '_' replacement */
for (let i = 0; i < wordChars; i++) {
    guessingWord[i] = "_";
}

/*Display empty fields where word will be produce, # of guesses, # of Wins, # of Losses */
document.getElementById("emptyFields").innerHTML = guessingWord.join(" "); /* Display blanks fields into page */
document.getElementById("guessRemaining").innerHTML = 3; /* Display turns */
document.getElementById("totalWins").innerHTML = wins;
document.getElementById("totalLosses").innerHTML = losses;

/* Capturing User's Letters and confirming if in word */
document.onkeydown = function (event) {
        /*Stops audio, if playing, when key is pressed*/
        stopAudio();
        
        /* checking valid letter and not already typed and if correct */
        if (alphabet.includes(event.key) && !typedLetters.includes(event.key) && word.includes(event.key)) { 
            checkLetterInWord(event.key);
        } 
        /* checking valid letter and not already typed */
        else if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { 
            checkWrongLetter(event.key);
        }
       
}

/*Checks if letter is in the word*/
function checkLetterInWord(letter){
    if (guessingWord.includes("_") && turns < 3) {
        for (let i = 0; i < wordChars; i++) {
            /*Loops through letters in word to check if your typed letter is in it. If yes then it replace blank field with letter*/
            if (word[i] === letter) {
                guessingWord[i] = letter;
                document.getElementById("emptyFields").innerHTML = guessingWord.join(" ");
                /* exits the function once there are not anymore blanks fields for letters to be guessed this might have to be inserted in if statement */
                if (!guessingWord.includes("_")) { 
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

//If wrong letter run this function
function checkWrongLetter(letter){

    if(guessingWord.includes("_") && turns < 3){
        typedLetters.push(letter);
        document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");  
        turns +=1;
        document.getElementById("guessRemaining").innerHTML = parseInt(3 - turns); 
        //Reset game and capture loss if you run out of turns
        if (turns === 3) { 
            losses++;
            playLoseAudio();
            document.getElementById("totalLosses").innerHTML = losses;
            resetGame();
            return;
        }
    }
}

//Checking key is letter and not already dupe
function checkKeyLetterAndDupe(){

    if(guessingWord.includes("_") && turns < 3){
        alert("Not a valid letter or already guessed");
        return;
    }
}

//Audio to be played on win
function playWinAudio(){
    let audioWin = document.getElementById("myWinAudio");
    audioWin.play();
}

//Audio to be played on loss
function playLoseAudio(){
    let audioLose = document.getElementById("myLoseAudio");
    audioLose.play();
}

//Audio to stop on refresh of page
function stopAudio(){
    let stopWinAudio = document.getElementById("myWinAudio");
    let stopLoseAudio= document.getElementById("myLoseAudio");
    stopWinAudio.pause();
    stopWinAudio.currentTime = 0.0;
    stopLoseAudio.pause();
    stopLoseAudio.currentTime = 0.0;
}

//Game to be resetted when out of turns or word guessed
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





