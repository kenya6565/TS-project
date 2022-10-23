"use strict";
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
//# sourceMappingURL=objs-arrays-enums.js.map