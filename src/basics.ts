function add4(n1: number, n2: number, showResult: boolean) {
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
const printResult2 = true;

const result = add4(number1, number2, printResult2);
console.log(result);
