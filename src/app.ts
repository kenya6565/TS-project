interface Greetable {
  // どのような構造なのかという形のみを書く
  name: string;

  // 引数、返り値を書く
  greet(phrase: string): void;
}

// personクラスはGreetableというインターフェースに従って実装するよ
class Person implements Greetable {
    name: string;
    constructor(n: string, public age: number) {
        this.name = n;
    }

    greet(phrase: string ) {
        console.log(phrase + ' ' + this.name);
    }
}

// user1にPerson型と同じ構造を割り当てたい
let user1: Greetable;

// user1をPersonに従って定義
user1 = new Person('Max', 30)
console.log(user1)
user1.greet('hello I am')