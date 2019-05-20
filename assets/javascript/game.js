
/* function blanks (){
    let wordArray = [];
    
    for (var i = 0; i < 3; i++){
        wordArray[i] = "_";
    }
    document.getElementById("emptyFields").innerHTML = wordArray.join(" ");;
}

document.getElementById("emptyFields").onkeypress = function() {blanks()}; */



/* Initializing game by creating empty fields */
/* 3 will be changed to number randomizer based on word */
let wordArray = []; 

for (var i = 0; i < 3; i++){
        wordArray[i] = "_";
    }

document.getElementById("emptyFields").innerHTML = wordArray.join(" "); /* Display blanks fields into page */



/* Capturing User's Letters */
let typedLetters = [];

document.onkeyup = function(event){
    typedLetters = event.key;
    console.log(typedLetters);
}

 /*    for(var i = 0; i < 26; i++){
            document.onkeyup = typedLetters.push;
            console.log(typedLetters)
        } */
    