"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const a = add2(2, 3);
console.log(a);
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log('荷物を乗せています...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const paragraph = document.getElementById('user-input');
if (paragraph) {
    paragraph.value = 'こんにちは';
}
//# sourceMappingURL=app.js.map