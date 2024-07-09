"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "saquib",
    email: "saquib@gm",
    isActive: false,
};
function createUser(user) { }
createUser({ name: "test", isPaid: false });
// return object function
function makeUser(user) {
    return {
        name: "test",
        ispaid: false,
    };
}
// that is error
makeUser({ name: "test", isPaid: false, email: "testEmail" });
// something that should not work works
// no error
let test = { name: "test", isPaid: false, email: "testEmail" };
makeUser(test);
