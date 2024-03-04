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
//functions
function addToNumbers(a, b) {
    return a + b;
}
const substractToNumbers = (a, b) => {
    return a - b;
};
addToNumbers(3, 4);
substractToNumbers(10, 2);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 11, 9, 3, 2, 1]);
//return type inference
function formatGreeting(name, greeting) {
    return `${greeting},${name}`;
}
const result = formatGreeting('Mario', 'hello');
//any type 
let address;
address = 30;
address = false;
//any type in array
let thing = ['hello', true, 30, null];
thing.push({ id: 12 });
//functions $ any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);
//tuples
let persons = ['mario', 12, true];
let hsla;
hsla = [200, '100%', '100', 1];
let xy;
xy = [94.7, 20.1];
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: 'mario',
    score: 75
};
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 45 });
//union types 
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@gmail.com';
email = null;
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType('1');
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
