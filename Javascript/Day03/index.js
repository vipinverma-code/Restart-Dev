// operator
// Arithmetic
console.log(2+3);
console.log(2-5);
console.log(2*5);
console.log(6/2);
console.log(5%2);
// Remainder
console.log(5**2);
// Assignment operator

let  x=10;
let  y=10;
x=x+y;
console.log(x);
// comparison operator

let m=20;
let n=10;
console.log(m>n);
console.log(m>=y);
console.log(m<y);
console.log(m==n);
console.log(m===n);

// let z="10";
// let a = Number(z);
// console.log(a);
// console.log(typeof a);

let c = "121ac";
let b = Number(c);
console.log(b);
console.log(typeof (b));
console.log(0/0);

// Number -> String

let p=10;
let q=String(10);
console.log(q);
console.log(typeof (q));

// Boolean-> Number

let a= false;
console.log(Number(a));
// Null -> Number
console.log(Number(null));
console.log(Number(undefined)); 
// computer science challenge

let e=0.1;
let f=0.2;
console.log(e+f);   
// ECMAScript rules
// 1. null is loosely equal to undefined only
// 2. >,<,>=,<= (null-> number , undefined-> NAN)
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
console.log(null>=undefined);
console.log("Rohit">"Mohit");
console.log(10=="10");
console.log(NaN === NaN);
console.log(NaN == NaN);