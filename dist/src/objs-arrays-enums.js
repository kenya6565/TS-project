"use strict";
// const person: {
//     name: string,
//     age: number,
//     hobbies: string,
//     role: [number, string]
// } = {
//     name: 'yota',
//     age: 36,
//     hobbies: ['sports', 'cooking']
//     role: [2, "author"]
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'yota',
    age: 36,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// let favoriteActivities: string[];
// favoriteActivities = ['sports', 'basketball']
// for (const hobby of person.hobbies) {
//     console.log(hobby)
// }
