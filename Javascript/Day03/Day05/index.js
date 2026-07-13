// Number
// toFixed method
// let a=10;
// let b=345.6821
// console.log(a);
// console.log(b);
// c=b.toFixed(3);
// console.log(c);
// let x=2.46;
// console.log(x.toFixed(1));

// toPrecision Method
// console.log(b.toPrecision(50));
// console.log(b.toString());
// console.log(typeof (b.toString()));
// let a= new Number(20);
// console.log(a);
// console.log(typeof a);
// object reference ke based per comparison hota hai.
console.log(Boolean(null));

// Non Primitive data reference ke basis per compare hote hai.
// Primitive: copy by value

// let a=10;
// let b=a;
// console.log(a==b);

// Math object ke built-in methods
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.ceil(2.4));
// console.log(Math.max(20,50,63));
// console.log(Math.random());

// 0-9 ke beech random number generate krana hai

// console.log(Math.floor(Math.random()*10)+1);
// 15-25
// formula:- Math.floor(Math.random()*(max-min+1)+min

// console.log(Math.floor((Math.random()*11)+15));

// used for otp generate
// 1000-9999
// console.log(Math.floor(Math.random()*(9999-1000 +1)+1000));
// function to generate random number
function random(min,max) {
    return Math.floor(Math.random()*(max-min +1)+ min);
 
}
let otp=random(1000,9999);
console.log(otp);
// is baar jo value return hogi usko baad me hm use bhi kr skste hai function ke bahar

