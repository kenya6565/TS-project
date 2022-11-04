// function Logger(logString: string) {
//     console.log("Logger ファクトリ")
//     return function(constructor : Function) {
//         console.log(logString)
//         console.log(constructor)
//     }

// }

// // htmlのtemplateを受け取りDOMのどこかに表示するデコレーター
// function WithTemplate(template: string, hookId: string) {
//     console.log("Template ファクトリ")
//     // この引数は受け取るけど使わないので_を指定する
//     return function(constructor : any) {
//         console.log("テンプレートを表示")
//         const hookEl = document.getElementById(hookId)
//         const p = new constructor()
//         if (hookEl) {
//             hookEl.innerHTML = template
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }
// // ここでデコレーターを指定
// @Logger("ログ出力中 - PERSON")
// // このappはindex.htmlで指定したid
// @WithTemplate("<h1>Personオブジェクト</h1>", "app")
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Personオブジェクトを作成中...');
//   }
// }

// const pers = new Person();

// console.log(pers.name);

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
    console.log('パラメータ　デコレータ')
    console.log(target)
    console.log(name)
    console.log(position)
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
