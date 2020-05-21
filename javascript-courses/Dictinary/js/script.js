"use strict";

// Multilang Translator

let translation = {
    pen: "ручка, 一支笔",
    apple: "яблоко, 苹果",
    cherry: "вишня, 樱桃",
    ручка: "pen, 一支笔",
    яблоко: "apple, 苹果",
    вишня: "cherry,樱桃",
    一支笔: "pen, ручка",
    苹果: "apple, яблоко",
    樱桃: "cherry, вишня"
}

const translate = (w) => {
    let message = "";
    w = w.toLowerCase();

    if (w in translation) message = "Приведенное слово - " + translation[w];
    else message = "В словаре такого слова нет";

    document.getElementById('result').innerHTML = message;

}

const start = () => {
    let userWordTranslate = document.getElementById("userWords").value;
    // вызываем функцию для перевода
    translate(userWordTranslate);
}


const addWords = () => {
    let en = document.getElementById('en').value;
    let ru = document.getElementById('ru').value;
    let ch = document.getElementById('ch').value;

    translation[en] = ru + ", " + ch;
    translation[ru] = en + ", " + ch;
    translation[ch] = ru + ", " + en;

    console.log(translation);
}

// frequaency dictionary

const addText = () => {
    // variable for make word from latters
    let word = '';
    // стек массив
    let wordFromText = [];
    // object from quantity 
    let finishWords = {};
    // user text save
    let text = document.getElementById('userText').value;
    // string to array
    text = text.split('');
    console.log(text);

    // walk in array (text) and search words with save him in array (wordfromtext)
    for (let i = 0; i <= text.length; i++) {
        if (text[i] != ' ' && i != text.length) word += text[i];
        else {
            if (word != '') wordFromText.push(word);
            word = '';

        }
    }
    console.log(wordFromText);

    // считаем повторение слов в уже заполненом массиве wordFromText

    for (let j = 0; j < wordFromText.length; j++) {
        let oneWord = wordFromText[j];
        if (finishWords[oneWord] != undefined) finishWords[oneWord]++;
        else finishWords[oneWord] = 1;

    }
    console.log(finishWords);

    for (let key in finishWords) {
        document.getElementById('textresult').innerHTML += "Word: " + key + " <br />Value: " + finishWords[key] +
            "<br />" + "<br />";
    }
}