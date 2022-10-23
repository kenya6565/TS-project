"use strict";
function add(n1, n2, showResult) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('numberじゃないよ');
    // }
    if (showResult) {
        console.log(n1 + '+' + n2);
    }
    return n1 + n2;
}
const number1 = 3;
const number2 = 2.8;
const printResult = true;
const result = add(number1, number2, printResult);
console.log(result);
