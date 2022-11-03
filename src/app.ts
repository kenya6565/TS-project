
function Logger(logString: string) {
    console.log("Logger ファクトリ")
    return function(constructor : Function) {
        console.log(logString)
        console.log(constructor)    
    }
    
}


// htmlのtemplateを受け取りDOMのどこかに表示するデコレーター
function WithTemplate(template: string, hookId: string) {
    console.log("Template ファクトリ")
    // この引数は受け取るけど使わないので_を指定する
    return function(constructor : any) {
        console.log("テンプレートを表示")
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}
// ここでデコレーターを指定
@Logger("ログ出力中 - PERSON")
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
