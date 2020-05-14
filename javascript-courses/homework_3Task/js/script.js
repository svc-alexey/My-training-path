"use strict";
const discriminant = () => {
    let a = Number(prompt("Enter a:", 0));
    let b = Number(prompt("Enter b:", 0));
    let c = Number(prompt("Enter c:", 0));
    let d = (b * b) - (4 * a * c);
    let x = 0;
    let x1 = 0;
    let x2 = 0;
    let result1 = 0;
    let result2 = 0;
    console.log(d);
    if (d > 0) {
        x1 += (-b + (d * d)) / (2 * a);
        x2 += (-b - (d * d)) / (2 * a);
        result1 += (a * (x1 * x1)) + (b * x1) + c;
        result2 += (a * (x2 * x2)) + (b * x2) + c;
        if (result1 == 0 && result2 == 0) console.log("Root of the equestion: " + x1 + 'and' + x2);
    }
    if (d == 0) {
        x += (-b) / (2 * a);
        console.log(x);
        result1 += a * (x * x) + b * x + c;
        console.log(result1);

        if (result1 == 0) console.log("Root of the equestion: " + x);
    } else alert("Equetions dosnt have root");
}

discriminant();