"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'John Doe';
const pow = (x, y) => x ** y;
console.log(pow(3, 3));
let dogName = "rex";
console.log(dogName);
// TABLEAU
const variants = ['primary', 'secondary', 'tertiary'];
// objet
const dog = {
    name: 'rex',
    age: 3
};
const numbers = [1, 2, 3];
for (let i in numbers) {
    console.log("number = ", i);
}
const user = {
    name: 'John',
    age: 32
};
console.log(Object.keys(user));
Object.keys(user).forEach(key => {
    console.log(user[key]);
});
const pseudos = {
    user1: 'titi',
    user2: 'toto'
};
