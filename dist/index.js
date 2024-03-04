"use strict";
let age = 30;
let person = 'Mg Mg';
let single = true;
let fruits = ['apple', 'orange', 'pineapple'];
fruits.push('Mg Mg');
console.log(fruits);
let ages = [20, 30, 40, 50, 60];
ages.push(80);
// ages.push('Hla');
console.log(ages);
let myself = {
    name: 'Kyaw Kyaw',
    age: 22,
    married: false
};
// myself.age = 'Su Su';
console.log(myself);
//null & undefined
let something;
let anotherThing;
something = null;
//anotherThing = 'Helo World'; --error
anotherThing = undefined;
//node --watch dist/index.js
console.log("Hello world");
//Array
let names = ['Mario', 'Luigi', 'Peach'];
let height = [25, 35, 45];
names.push('Bowser');
height.push(34);
let things = [1, true, 'hello'];
const t = things[0];
let user = {
    firstName: 'mario',
    age: 30,
    id: 1
};
user.firstName = 'peach';
user.id = 2;
console.log(user);
