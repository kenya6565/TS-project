"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add2;
console.log(combineValues(1, 2));
printResult(add2(5, 12));
//# sourceMappingURL=functions.js.map