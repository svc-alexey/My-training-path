"use strict";



const calculator = () => {
    let number = [1,2,3,4,5,6,7,8,9];
    let result = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number.length ; j++) {
            result = number[j] * number[i];
            console.log(number[i] + " * " + number[j] + " = " + result);
            if (number[j] == number.length) console.log(`\n`);
        }
    }
}
calculator();