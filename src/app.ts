type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// AdminとEmployeeを持ってる型
// &で合体
type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

// CombinableとNumericで共通しているのがnumberなのでnumber型になる
type Universal = Combinable & Numeric;

function add2(a: Combinable, b: Combinable) {
  // 型によって処理を切り替える→型がーど
  // aかbどちらかがstringであれば文字列化する
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const a = add2(2, 3);
console.log(a);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  if ('privileges' in emp) {
    console.log('Privileges ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('start Date: ' + emp.startDate);
  }
  console.log(emp.name);
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('運転中...');
  }
}

class Truck {
  drive() {
    console.log('トラックを運転中...');
  }

  loadCargo(amount: number) {
    console.log('荷物を乗せています...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // Truckのインスタンスから作成されているものか判断する
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  // birdという文字列のみを許容するtypeというプロパティを定義
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('移動速度: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
