// type AddFn = (a: number, b:number) => number;
interface AddFn {
  // インターフェースの場合はメソッド名はない(匿名メソッド的な)
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  name?: string;
  // インターフェースを持つクラスがこのプロパティを持つかは任意であるよ
  outputName?: string;
}

interface Greetable extends Named {
  // どのような構造なのかという形のみを書く

  // 引数、返り値を書く
  greet(phrase: string): void;
}

// personクラスはGreetableというインターフェースに従って実装するよ
class Person2 implements Greetable, Named {
  name?: string;
  constructor(n: string, public age: number) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi');
    }
  }
}

// user1にPerson型と同じ構造を割り当てたい
let user1: Greetable;

// user1をPersonに従って定義
user1 = new Person2('Max', 30);
user1.name = 'John';
console.log(user1);
user1.greet('hello I am');
