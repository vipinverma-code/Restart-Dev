// function

// function declaration
function greet(){
    console.log("Congrats!, you are a frontend developer");
}
// function calling
greet();

// function for adding two add numbers
// parameters: variables declared in the function definition
// arguments: actual values which passed when calling the function
// function sum(a,b,c=0,d=0){
//     const sum=a+b+c;
//     console.log(sum);
// }
// sum(5,9);
// sum(5,6,8)
// sum(5,9,8,9,7,2,8,1,47,1);
// when there is a lot of inputs taken by the user we use rest opeartor for fund the setTimeout(() => {
    
// function sum(...num){
//     let sum=0;
//     for(let val of num ){
//         sum=sum+val;
//     }
//     console.log(sum);
// }
// sum(6,8);
// sum(9,5,6);
// sum(9,2,34,5);

// function sum(...num){
//     let sum=0;
//     for (let i=0; i<num.length;i++){
//         sum=sum+num[i]; 
//     }
//     console.log(sum);
// }
// sum(6,8,9);

// difference between spread and rest operator

const arr=[10,20,30,41,62];
// const [first,second,  ...num]=arr;
// console.log(first,second,num);

// function:expression
// const addNumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));

// console.log(add(5,9));
// function add(num1,num2){
//     return num1+num2;
// }


// arrow function
// const addNumber=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNumber(80,96));

// in arrow function if we return one thing there is no need to use the curly braces and write return

// const squareNumber=(n)=> n*n;
// console.log(squareNumber(5));

// if we have single parameter , there is no need of this ()

// const greeting=()=>{
//     return{
//         name:"Vipin",
//         age:22,
//     }
// }
// console.log(greeting().name);

// const greeting=()=>({ name:"Vipin", age:22})
// console.log(greeting());

// IIFE

(function greeting(){
    console.log("Helloji");
})();