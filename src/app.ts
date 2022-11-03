// デコレーターを定義
// クラスにデコレーターを指定するときは1つの引数を取る
// 今回はPersonクラスのconstroctorに対してつけたいのでFunctionを指定する
function Logger(constructor : Function) {
    console.log("ログ出力中...")
    console.log(constructor)
}

// ここでデコレーターを指定
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

// const pers = new Person();

// console.log(pers.name);
