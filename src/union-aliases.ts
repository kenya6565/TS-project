type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === 'as-number') {
  //   // numberに変換するには+をつける
  //   return +result;
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combineAges = combine(30, 26, 'as-number');

console.log(combineAges); // 30 + 26 = 30 + 26

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges); // 30 + 26 = 30 + 26

const combineNames = combine('Mac', 'Anna', 'as-text');
console.log(combineNames); // 'Mac' + 'Anna' = 'MacAn
