var words = [
    'programm',
    'macaco',
    'best',
    'maffin',
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

var remainingLetters = word.length;
var n = 20;
while (remainingLetters > 0 && n > 0) {
    alert(answerArray.join(' '));
    var guess = prompt('guess latter or press cancel to exit in the game.');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('please, guess one latter');
    } else {
        n--;
        guess = guess.toLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === '_') {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(' '));
if (n > 0) {
    alert('Congratulation! The word was made ' + word);
} else {
    alert('Very Bad! The word was made ' + word);
}