// call, apply, bind, this
// this: class object method
// strict mode vs non strict mode 
// global Object:- In window , it is called window object,  in node js , it is called global
// globalThis: It points to the global object of the environment

// 'use strict'
// var a=10;
// let b=20;
// console.log(a,b);
// function greet(name1,name2){
//     console.log(name1,name2);
// }
// greet("Vipin","Ankit");
// console.log(window);
// console.log(global);
// console.log(globalThis);


// Now , I am going to learn about this keyword

// console.log(this);
// this keyword in global scope: it points out to the empty object in nodejs environment and it points out to the window object in the browser

// Function

// const user={
//     name:"Rohit",
//     age:30,
//     greet:function(){
//         console.log(`hi ${this.name}`);
//     }
// }
// user.greet();

// const user2={
//     name:"Mohit",
// }

// user2.greet=user.greet;
// user2.greet();

// 'use strict'

// function greet(){
//     console.log(this);
// }
// greet();

// normal function: non strict mode, this will point to the global object
// in strict mode: It will point to undefined


// Now , with the help of calling the function , we make function reusable

