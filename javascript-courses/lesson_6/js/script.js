"use strict";

// 3 in 1 Words in string, Только те которые встречаються 

let userText = prompt('Enter string');

// function calculate words

const letterCount = (w) => {
    // многомерный массив, каждая ячейка - это буква алфавита и счетчик(сколько раз буква встретилась в введенной строке)
    // для каждой буквы в счетчик изначально записываем 0 
    //  arrlet[9][0] array i
    let arrlet = [
        ['а', 0],
        ['б', 0],
        ['в', 0],
        ['г', 0],
        ['д', 0],
        ['е', 0],
        ['ё', 0],
        ['ж', 0],
        ['з', 0],
        ['и', 0],
        ['й', 0],
        ['к', 0],
        ['л', 0],
        ['м', 0],
        ['н', 0],
        ['о', 0],
        ['п', 0],
        ['р', 0],
        ['с', 0],
        ['т', 0],
        ['у', 0],
        ['ф', 0],
        ['х', 0],
        ['ц', 0],
        ['ч', 0],
        ['ш', 0],
        ['щ', 0],
        ['ъ', 0],
        ['ы', 0],
        ['ь', 0],
        ['э', 0],
        ['ю', 0],
        ['я', 0]
    ];
    w = w.toLowerCase();
    // to array
    w = w.split('');
    // проверяем в цыкле каждую букву на совпадение
    for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < arrlet.length; j++) {
            if (w[i] == arrlet[j][0]) arrlet[j][1]++;
            // console.log(w[i]);
            // console.log(arrlet[[j][0]]);
        }
    }
    // console.log(arrlet);
    // вывести буквы с ненулевыми счетчиками
    for (let k = 0; k < arrlet.length; k++) {
        if (arrlet[k][1] != 0) console.log(arrlet[k][0] + ':' + arrlet[k][1]);
    }
    return arrlet;
}



// функция,которая принимает результат работы функции letterCount ->res и вычисляет
// какая буква встречается чаще,а какая реже

const maxMinCount = (mas) => {
    let countMax = ['', 0];
    let countMin = ['', 0];

    for (let i = 0; i < mas.length; i++) {
        if (mas[i][1] > countMax[1]) {
            // сохранить букву
            countMax[0] = mas[i][0];
            // сохранить счетчик
            countMax[1] = mas[i][1];
        }
    }

    countMin[0] = countMax[0];
    countMin[1] = countMax[1];

    for (let z = 0; z < mas.length; z++) {
        if (mas[z][1] < countMin[1] && mas[z][1] != 0) {
            countMin[0] = mas[z][0];
            // сохранить счетчик
            countMin[1] = mas[z][1];
        }

    }



    // Для совпадения минимальных значений 
    let count = [];
    let stringCount = '';

    for (let j = 0; j < mas.length; j++) {
        if (mas[j][1] == countMin[1]) {
            count.push(mas[j][0]);
            stringCount = count.join(', ').slice(3);
        }
    }
    // console.log(countMax);
    // console.log(countMin);

    // выводим самую частовстречающуюся букву и значение счетчика
    console.log("Чаще встречается буква " + countMax[0] + ",значение счетчика:" + countMax[1]);
    console.log("Реже встречается буква " + countMin[0] + ",значение счетчика:" + countMin[1]);
    console.log("Так же реже встречаються буквы:" + stringCount);


}

let res = letterCount(userText);
maxMinCount(res);