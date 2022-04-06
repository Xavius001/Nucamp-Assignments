function runGame() {
    const target=Math.floor(Math.random() * 100) + 1;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    do {
        guessString = prompt('Guess a number between 1-100.');
        if(guessString === null) {
            return;
        }
        numTries++;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while(!correct)
    alert('You have guessed correctly after ' + numTries + ' tries');
}
function checkGuess(guessNumber, target) {
    let correct = false;
    if(isNaN(guessNumber)) {
        alert('You did not enter a number.');
    }
    else if(guessNumber<1 || guessNumber>100) {
        alert('Your guess is out of range.');
    }
    else if(guessNumber>target) {
        alert('Your guess is larger than the target.');
    }
    else if(guessNumber<target) {
        alert('Your guess is smaller than the target.');
    }
    else {
        correct=true;
    }
    return correct;
}