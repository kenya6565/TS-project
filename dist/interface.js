"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person2 {
    constructor(n, age) {
        this.age = age;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person2('Max', 30);
user1.name = 'John';
console.log(user1);
user1.greet('hello I am');
//# sourceMappingURL=interface.js.map