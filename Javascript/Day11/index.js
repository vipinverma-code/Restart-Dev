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
function createCounter(){
    let count= 0;
    function increment(){
        count++;
           console.log("I am increment function");
        return count;
        // console.log("I am increment function");
    }
      return increment;
}

// console.log(count);
const counter=createCounter();
console.log(counter());
// count();




