"use strict";
// function
Object.defineProperty(exports, "__esModule", { value: true });
function sum(n1, n2) {
    if (n1 > 4) {
        return "noice";
    }
    return n1 + n2;
}
sum(3, 7);
// function user
const user = (name, number, male = true) => { };
user("saquib", 9);
user("rina", 9, false);
const heros = ["thor", "magineto", "storm"];
heros.map((hero) => {
    return `My hero name is ${hero}`;
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    console.log(errorMsg);
    throw new Error(errorMsg);
}
