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

// loop kaise kaam krte hai.
// for loop

for(let i=0; i<10; i++ ){
    console.log(i)
}

// for(let i=10; i>0; i--){
//     console.log(i)
// }

// while loop
// let i=0;
// while(i<10){
//     console.log(i);
//     i+=1;
// }

// do while loop

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// if-else condition

// let age=18;
// if(age>=18){
//     console.log("you are eligible to vote");
// }
// else{
//     console.log("not eligible to vote");
// }

// kid ,young, and ,old

let age=45;
if(age<18){
    console.log("kid");
}
else if(age>=60){
    console.log("Old");
}
else{
    console.log("young")
}
// Logical opeartor
// && , ||
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// ||opeartor
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let t=20;
let u=25;
console.log(t&&u);
console.log(t||u);
// && if first value is true it will give output second,if first value is false it will give first value itself


// AND: &,| or

console.log(2&5);
// ye bitwise operator hai isme hme binary form me convert krke and or operation perform krne honge