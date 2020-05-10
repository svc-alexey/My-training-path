function multiply() {
    let number = 1;
    for (let i = number; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz " + i);
        }
        if (i % 5 == 0) {
            console.log("Buzz " + i);
        }
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz ' + i);
        }
    }
    number++;
}

function chess() {
    let size = 16;
    let board = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) board += " ";
            else board += "#";
        }
        board += "\n";
    }
    return board;
}

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

function countBs(str, sym) {
    foundB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == sym) {
            return foundB += i;
        }
    }
    console.log('B found ' + foundB);
}




a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);