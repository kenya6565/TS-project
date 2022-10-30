// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました');
//   }, 2000);
// });

// T,Uはそれぞれ違う型を持っているよーってことを伝えている
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string }, { age: number }>(
  { name: 'Max' },
  { age: 30 }
);
console.log(mergedObj.age);
