/* use this to start game with the press of any key */
document.onkeyup = function (event) {
    alert("Press any key to start the game!");
        if(event.key){
            return;
        }
        else{
            alert("Still no key pressed");
        }
}

/* Initializing game by declaring variables and creating empty fields */
let guessingWord = [];
let words = ["goku","frieza"];
let word = words[Math.floor(Math.random() * words.length)];
let wordChars = word.length;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let typedLetters = [];
let turns = 0; /* using to end game once 9 wrong guesses typed */

for (let i = 0; i < wordChars; i++) {
    guessingWord[i] = "_";
}

document.getElementById("emptyFields").innerHTML = guessingWord.join(" "); /* Display blanks fields into page */


/* Capturing User's Letters and confirming if in word */
document.onkeyup = function (event) {

    if (alphabet.includes(event.key) && !typedLetters.includes(event.key) && word.includes(event.key)) { /* checking valid letter and not already typed and if correct */
        
        for (let i = 0; i < wordChars; i++) { 
            if(word[i] === event.key){
                guessingWord[i] = event.key;
                document.getElementById("emptyFields").innerHTML = guessingWord;

                if(!guessingWord.includes("_")){ /* exits the function once there are not anymore blanks fields for letters to be guessed this might have to be inserted in if statement */
                    alert("You won!");
                    return;
                }
            }
            else{
                document.getElementById("emptyFields").innerHTML = guessingWord;
            }
        }    
    } 
    else if (alphabet.includes(event.key) && !typedLetters.includes(event.key)) { /* checking valid letter and not already typed */
        typedLetters.push(event.key);
        document.getElementById("guessedLetters").innerHTML = typedLetters.join(" ");  /*  inputting each incorrect letter typed into array */
        turns +=1; 
            if(turns === 9){ /* exits the functions with 9 wrong guessesthis might have to be inserted in else if */
                alert("You lost!");
                return;
            }
    }
    else{
        alert("Not a valid character or already guessed");
    }  
}


/*Ending game after 9 wrong guesses*/






