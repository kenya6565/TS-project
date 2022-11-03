
function Logger(logString: string) {
    return function(constructor : Function) {
        console.log(logString)
        console.log(constructor)    
    }
    
}


// htmlのtemplateを受け取りDOMのどこかに表示するデコレーター
function WithTemplate(template: string, hookId: string) {
    // この引数は受け取るけど使わないので_を指定する
    return function(_: Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
}
// ここでデコレーターを指定
// @Logger("ログ出力中 - PERSON")

// このappはindex.htmlで指定したid
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

// const pers = new Person();

// console.log(pers.name);
