let age:number = 30 ;
let person:string = 'Mg Mg';
let single:boolean = true;

let fruits = ['apple','orange','pineapple'];
fruits.push('Mg Mg');
console.log(fruits);
let ages = [20,30,40,50,60];
ages.push(80);
// ages.push('Hla');
console.log(ages);

let myself = {
    name : 'Kyaw Kyaw',
    age : 22,
    married : false
}
// myself.age = 'Su Su';
console.log(myself);

//null & undefined
let something:null
let anotherThing:undefined
something = null;
//anotherThing = 'Helo World'; --error
anotherThing = undefined;

//node --watch dist/index.js
console.log("Hello world");

//Array
let names:string[] = ['Mario','Luigi','Peach'];
let height:number[] = [25,35,45];
 
names.push('Bowser');
height.push(34);

let things = [1,true,'hello'];
const t = things[0];

let user: {firstName : string, age:number, id:number} = {
    firstName: 'mario',
    age : 30 ,
    id:1
}
user.firstName = 'peach';
user.id = 2;
console.log(user);

//functions
function addToNumbers(a:number,b:number):number{
    return a+b;
}
const substractToNumbers = (a:number, b:number):number => {
    return a-b;
}
addToNumbers(3,4);
substractToNumbers(10,2);

function addAllNumbers(items:number[]) :void{
    const total = items.reduce((a,c) => a + c,0)
    console.log(total);
}
addAllNumbers([5,7,11,9,3,2,1]);
//return type inference

function formatGreeting(name:string, greeting:string){
    return `${greeting},${name}`;
}
const result = formatGreeting('Mario','hello');