// call, apply, bind, this
// this: class object method
// strict mode vs non strict mode 
// global Object:- In window , it is called window object,  in node js , it is called global
// globalThis: It points to the global object of the environment

// In class constructor, this will poitns to the newly create empty object

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

// function greet(){
//     console.log(`Hi ${this.name}`);
// }
// function incrementAge(value,name){
//     this.age+=value;
//     this.name=name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user1={
//     name:"Vipin Verma",
//     profession:"Developer & Entrepreneur",
//     age:22,
// }

// const user2={
//     name:"Shristi",
//     profession: "IT",
//     age:21,
// }

// // greet.call(user1);
// // greet.call(user2);
// // incrementAge.call(user1,5,"Ayush");
// incrementAge.apply(user1,[5,"Ayush"]);
// const incr= incrementAge.bind(user2,10,"Mohan");
// incr();


// class
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

// }
// const p1= new Person("Vipin",22);
// console.log(p1);

// Arrow function: this doesn't exist for arrow function
// Arrow function take this keyword from lexical environment

// const greet = ()=>{
//     console.log(this);
// }
// greet();
// 'use strict'
// const user={
//     name:"Rohit",
//     greet:function(){
//         function meet(){
//             console.log(this);
//         }
//         meet();
//     }
// }
// user.greet();

const stopWatch= {
    second:0,
    start:function(){
        setInterval(()=>{
            this.second++;
            console.log(this.second);
        },1000)
    }
};
stopWatch.start();

