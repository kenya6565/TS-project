"use strict";
class Person {
    constructor(n, age) {
        this.age = age;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Max', 30);
console.log(user1);
user1.greet('hello I am');
//# sourceMappingURL=app.js.map