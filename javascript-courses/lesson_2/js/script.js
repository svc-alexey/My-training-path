"use strict";

// System date work
function numbersRandom() {
    let systemDate = new Date();
    let sec = systemDate.getSeconds();
    // let hours = systemDate.getHours();
    // let minutes = systemDate.getMinutes();
    // console.log("Time Now: " + hours + ':' + minutes);
    let getNumbers = sec % 10;
    return getNumbers;
}

function theGame() {
    let generateNumber = numbersRandom();
    let userInput = document.getElementById("userNumber").value;

    if (generateNumber == userInput) {
        // alert("Right");
        document.getElementById("gameResult").innerHTML = "Right!";
    } else if (userInput == "") alert("Enter number 0 - 9");
    else document.getElementById("gameResult").innerHTML = "Wrong!";
}

function nextImg(pic) {
    document.getElementById("gallery").src = "img/" + pic;
}