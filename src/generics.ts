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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['hoge', 'fuga']));

// UはTのプロパティ(オブジェクト型のkey)として存在しなければならいよ~という指定をkeyofでしている
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({"name": 1, "fuga": 2}, 'name'))

class DataStorage<T extends string | number | boolean> {
  // このdataはTの配列型だよ
  private data: T[] = [];

  // このitemはメソッドの引数
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    // このthisはDataStorageクラスを指す
    console.log(this);
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>()

// objStorage.addItem({name: 'Max'})
// objStorage.addItem({name: 'Manu'})

// objStorage.removeItem({name: 'Manu'})

// textStorage.addItem("Data1")
// textStorage.addItem("Data2")
// textStorage.removeItem("Data1")

// console.log(objStorage.getItems())

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
//   Partialを付けることでCourseGoalが任意の値になる
// だから初期値に空の{}を指定してもエラーにならなくなる
// だがこれは、Partial型でありCourseGoal型ではなくなる
// as CourseGoalと型キャストすることでエラー回避
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// これは文字列の配列だけど他の値を入れるとエラーになるよ
const names : Readonly<string[]> = ['Max', 'Anna']
// names.push('Manu')
