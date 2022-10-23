function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})



let combineValues: (a:number, b:number) => number;

combineValues = add;

console.log(combineValues(1, 2));
printResult(add(5, 12));
