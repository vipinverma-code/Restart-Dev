// Scope and Closure, Higher Order function
// let a =10;
// const b=20;
// var e=90;
// a and b have global scope
// if(true){
//     console.log(b);
//     var e=90;
// }
// console.log(e);

// console.log(a);
// function greet(){
//     let c=30; 
//     console.log(a);
// }
// greet();
// console.log(c);
// var c have functional scope

// let global = 30;
// function greet(){
//     let global=40;
//     console.log(global);
// }
// greet();


// let global=30;
// function greet(){
//     let global=40;
//     function meet(){
//         console.log(global);
//     }
//     meet();
// }
// greet();
// function createCounter(){
//     let count= 0;
//     function increment(){
//         count++;
//            console.log("I am increment function");
//         return count;
        // console.log("I am increment function");
//     }
//       return increment;
// }

// console.log(count);
// const counter=createCounter();
// console.log(counter());
// console.log(counter())
// count();

// use of closure
// closure ka mtlab hai ki inner function outer function ke variables ko yaad rkhta hai.
// function outer(){
//     let name="Vipin";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// const result=outer();
// result();

// example of closure

// function counter(){
//     let x=0;
//     function updatecounter(){
//         x++;
//         console.log(x);
//     }
//     return updatecounter;
// }
// const result1=counter();
// result1();

// function bankAccount(){
//     let balance=1000;
//     function deposit(amount){
//         balance+=amount;
//         console.log(balance);
//     }
//     return deposit;
    
// }
// const account=bankAccount();
// account(500);


// examples of higher order function

function double(){
    function execute(){
        console.log("hello");

    }
    return execute;
}
double();