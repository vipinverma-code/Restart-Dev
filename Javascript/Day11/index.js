// Scope and Closure, Higher Order function
let a =10;
const b=20;
var e=90;
// a and b have global scope

if(true){
    console.log(b);
    var e=90;
    // console.log(e);
}
console.log(e);

console.log(a);
function greet(){
    let c=30; 
    console.log(a);
}
greet();
// console.log(c);
// var c have functional scope
