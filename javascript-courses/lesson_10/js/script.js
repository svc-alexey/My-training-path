"use strict";

const price = () => {
    let tdFirst = document.createElement('td');
    tdFirst.innerHTML = 'Cost';
    document.getElementById('str1').append(tdFirst);

    let quantytyTr = document.getElementById('exTable').getElementsByTagName("tr").length;

    // sum cost equip

    let summ = 0;

    // out first string table in  console

    console.log("Name Prise Value Cost");

    for (let i = 1; i < quantytyTr; i++) {
        // value rows
        let elementsTovarName = document.getElementById("str" + (i + 1)).getElementsByTagName("td")[0].textContent;

        let elementsA1 = document.getElementById("str" + (i + 1)).getElementsByTagName("td")[1].textContent;
        elementsA1 = parseInt(elementsA1);

        let elementsB1 = document.getElementById("str" + (i + 1)).getElementsByTagName("td")[2].textContent;
        elementsB1 = parseInt(elementsB1);

        // out  cost tovar added td in end string tr

        let tdSecond = document.createElement('td');
        let priceA1B1 = elementsA1 * elementsB1;
        tdSecond.innerHTML = priceA1B1;
        document.getElementById('str' + (i + 1)).append(tdSecond);

        // sum all cost

        summ += elementsA1 * elementsB1;

        // out string of table (witout firts and all) in console
        console.log(elementsTovarName + "         " + elementsA1 + "       " + elementsB1 + "       " + priceA1B1);

    }
    // output summ
    document.getElementById('result').innerHTML = 'All cost:' + summ;

    // output console.log

    console.log('All cost:' + summ);
}


const addNew = () => {

    let newProductName = document.getElementById('inName').value;
    let newProductPrise = document.getElementById('inPrise').value;
    let newProductValue = document.getElementById('inValue').value;
    let quantytyTr = document.getElementById('exTable').getElementsByTagName("tr").length;

    let trNew = document.createElement('tr');
    trNew.id = "str" + (quantytyTr + 1);
    document.getElementById('exTable').append(trNew);

    let newString = document.getElementById('str' + (quantytyTr + 1));

    let quantytyTd = document.getElementById('newInput').getElementsByTagName('td').length;

    for (let i = 0; i < quantytyTd; i++) {
        newString.appendChild(document.createElement('td'));
        document.getElementById("str" + (quantytyTr + 1)).getElementsByTagName("td")[i].id = "td" + i;
    }

    document.getElementById('td0').innerHTML = newProductName;
    document.getElementById('td1').innerHTML = newProductPrise;
    document.getElementById('td2').innerHTML = newProductValue;
}