// Varibales in js 
let age="22";
let name ="Vipin Verma";
name="Rohit Bhai";
// values ko reassign kr skte hai.
console.log(name);      

const account=2345;
// account=4500;
// value ko reassign nhi kr skte hai 
console.log(account);

var a=10;
var a=20;
console.log(a);
// redeclare aur reassign can do both

// data type

// primitive data type
// number, string, boolean,undefined, null, bigint, symbol

// Non Primitive data type
// array, object, function 

// number

let c =10;
let b=4.76;
console.log(c,b);

// string

let d="I am a frontend developer";
let e="it is fnatastic job";
console.log(d,e);

// boolean

let login= true;
let f= false;
console.log(login);
console.log(f);
// undefined

let user;
console.log(user);

// bigint
let n=234556699900303030303030303n;
console.log(n);
console.log(typeof(n));

// null

let weather= null;
console.log(weather);
//symbol

const id1= Symbol("id");
console.log(id1);
const id2= Symbol("id");
console.log(id2);

// non-primitive data type
// array

let arr=[10,20,"Vipin",3.5];
console.log(arr);

// object

let details={
    name:"Vipin Verma",
    age: 22,
    profession: "Frontend Developer",
    category: "obc"
}

console.log(details);

// function

function add(a,b){
    return a+b;
}
console.log(add(25,28));
console.log(typeof(add));

// Primitive data types are immutable 

let str="Ankit";
str[0]="V";
console.log(str);

// Non-Primitive data types are mutable

const arr1=[1,2,3,"Vipin","Ankit"];
arr1[3]="Vanshika";
console.log(arr1);
