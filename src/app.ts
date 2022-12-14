function Logger(logString: string) {
  console.log('Logger ファクトリ');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// htmlのtemplateを受け取りDOMのどこかに表示するデコレーター
function WithTemplate(template: string, hookId: string) {
  console.log('Template ファクトリ');

  //   これはオブジェクトですが、newキーワードを使ってインスタンスを作成できる関数ですという意味
  // そしてその引数はレストパラメータで何個でも受け取れますよという意味
  // 返り値はnameがある何らかのオブジェクトですよ→下の処理がそれを受け取る
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // このconstructorは上のconstructorを継承しているので
    // オリジナルのメソッドやプロパティが受け継がれている
    // このclassはデコレーターを呼び出したクラスに対して返される新たなクラス
    return class extends originalConstructor {
      //   上のfunctionの引数を受け取る必要がある
      constructor(...args: any[]) {
        // superによってoriginalConstructorが呼び出される
        super();
        console.log('テンプレートを表示');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}
// ここでデコレーターを指定
@Logger('ログ出力中 - PERSON')
// このappはindex.htmlで指定したid
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

const pers = new Person();

console.log(pers.name);

// ---
// インスタンスプロパティ(title)にデコレーターを設定するとクラスのプロトタイプ(Productクラス)がtargetに入る
// staticプロパティの場合はconstructor関数が入る
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property デコレーター');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor デコレーター');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method デコレーター');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('パラメータ　デコレータ');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  // プロパティに対してデコレーターを設定する

  title: string;
  @Log
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('不正な価格です - 0以下は設定できません');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price + (1 + tax);
  }
}

// targetはインスタンスメソッドはprototype
// staticメソッドはconstructor関数が入ってくる
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // 元のメソッドのオブジェクトを取得
  const originalMethod = descriptor.value;

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // returnする前にここで何か処理することができる
    get() {
      // このthisはget()の呼び出しもと→adsDescriptorを指す?
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  // ここで上のadjDescriptorを返す(新しいdescriptorに上書き)
  return adjDescriptor;
}
class Printer {
  message = 'クリックしました';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector('button')!;

// このeventListnerからshowMessageが呼ばれた場合,thisにはpのクラスが入るようになる
// これをしないとthisには呼び出し元のbuttonが入ることになる
button.addEventListener('click', p.showMessage);
