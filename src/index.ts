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

//any type 
let address:any;

address = 30;
address = false;


//any type in array
let thing:any[] = ['hello',true,30,null]
thing.push({id:12});

//functions $ any
function addTogether(value:any):any{
    return value+value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);

//tuples
let persons:[string,number,boolean] = ['mario',12,true];

let hsla:[number,string,string,number];
hsla = [200, '100%','100',1];

let xy:[number,number];
xy= [94.7,20.1];

//interfaces
interface Author {
      name: string,
      avatar:string
}
const authorOne: Author = {name: 'mario' , avatar : '/img/mario.png'};

interface Post{
    title : string,
    body : string,
    tags: string[],
    created_at:Date,
    author : Author
}
const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming','tech'],
    created_at: new Date(),
    author: authorOne
}

function createPost(post:Post) : void{
    console.log(`Created post ${post.title} by ${post.author.name}`)
}
createPost(newPost);

let posts: Post[] = []
posts.push(newPost);
