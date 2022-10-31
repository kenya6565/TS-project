"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['hoge', 'fuga']));
//# sourceMappingURL=app.js.map