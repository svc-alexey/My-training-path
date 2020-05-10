"use strict";


// ========= First example =============

// const word1 = prompt("word 1");
// const word2 = prompt("word 2");
// const word3 = prompt("word 3");


// const wordsCompare = (w1, w2) => w1.length > w2.length ? w1 : (w1.length == w2.length ? "equally" : w2);

// const threeWordsCompare = (w1, w2, w3) => wordsCompare(w1, w2) == "equally" ? (w1.length > w2.length ? w1 : w2) : (wordsCompare(w1, w2).length > w3.length ? wordsCompare(w1, w2) : w3);

// const threeWordsCompare = (w1, w2, w3) => wordsCompare(w1, w2).length > w3.length ? wordsCompare(w1, w2) : w3;

// console.log(wordsCompare(word1, word2));
// console.log(threeWordsCompare(word1, word2, word3));

// ========= Second example =============

// let fourLatters = prompt("");
// if (fourLatters !== 4) {
//     alert("prompt 4 laters word");
//     location.reload();
// }


// const checkWord = (w) => {

//     w = w.toLowerCase();
//     // string to array
//     w = w.split('');

//     // save array for reverse function
//     let reword = w;

//     // array to string
//     w = w.join();

//     reword = reword.reverse();

//     reword = reword.join();

//     // console.log(reword);

//     if (w == reword) return true;
//     else return false;

// }

// console.log(checkWord(fourLatters));



// ========= Third example =============


let word = prompt('Prompt any word');

const userTransleter = (w) => {
    w = w.toLowerCase();

    let dictionary = new Map([
        ['technical', 'технический'],
        ['programming', 'программирование'],
        ['development', 'разработка']
        // [key, value]
    ]);

    let dictionaryObject = Object.fromEntries(dictionary.entries());

    let error = false;

    for (let [key, value] of Object.entries(dictionaryObject)) {
        if (key == w) {
            console.log(`${value}`);
            error = true;
        }
    }
    if (error == false) console.log('For your word no translate');
}

userTransleter(word);