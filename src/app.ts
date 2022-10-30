// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました');
//   }, 2000);
// });

// Tはどんな構造の引数でも受け取れるけどオブジェクト型じゃないとダメだよ
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//型推論でobject型ということを明確に伝えなくてもよい
const mergedObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });
