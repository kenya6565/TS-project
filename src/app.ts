interface Person {
  // どのような構造なのかという形のみを書く
  name: string;
  age: number;

  // 引数、返り値を書く
  greet(phrase: string): void;
}

// user1にPerson型と同じ構造を割り当てたい
let user1: Person;

// user1をPersonに従って定義
user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('hello I am')