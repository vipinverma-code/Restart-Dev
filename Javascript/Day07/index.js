// Array
// let marks1=100;
// let marks2=50;
// let marks3=70;
// let marks4=80;
// let marks=[100,50,70,80,90];
// console.log(marks);
// Array can store heterogenous type of data
// const arr=[100,30,"Rohit",true];
// console.log(arr);
// arr[0]="Vipin";
// console.log(arr);
// console.log(marks.length);
// console.log(typeof arr);
// Access method of array 
// console.log(arr[2]);
// Adding new element to array in the end
// arr.push(90);
// console.log(arr);
// Remove element from the end of array
// arr.pop();
// console.log(arr);

// Starting me element ko addkr skta hun , aur remove bhi kr skta hun
// arr.unshift("Vipin");
// console.log(arr);
// arr.shift();
// console.log(arr);

// let array=[10,30,50,90,11];
// print the element of array one by one
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// for of loop
// for(let value of array){
//     console.log(value);
// }

// next challenge

// let arr=[10,30,50,90,11];
// let arr2=arr;
// arr2.push(30);
// console.log(arr);
// ye tumahara copy by reference hoga,
// const array2=[10,20,30,10];
// array2[2]=80;
// console.log(array2);

// Slice method in array
// const arr=[10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr2);
// new array bnega ,original array me koi change nhi aayega
// original array se koi part trim krane ke liye splice method ka use krte hai
// const arr3=arr.splice(1,3,"Rohit",89);
// console.log(arr3);
// console.log(arr);

// Spread opeartor

const arr=[10,30,50,90,11];
const arr2=["Rohit",11,true];
// arr.push(arr2);
// const arr3=arr.concat(arr2);
// console.log(arr3);

// spread operator

const arr3=[...arr,...arr2];
console.log(arr3);

// Array to String
const names=["alice", "Rohit","Bob","Mohit","Charlie"];
// console.log(names.toString());
// join opeartion
console.log(names.join(" "));
// console.log(names.indexOf("Alice"));
// console.log(names.includes("Bob"));
// Now learn to sort the array
console.log(names.sort());
console.log(names.reverse());

// const a=[101,90,80,32,91];
// a.sort();
// console.log(a);
// const array5=["Vipin",900,600,"Sanskar"];
// console.log(array5.sort());

const n=[10,40,31,71,5,11];
// n.sort((a,b)=>a-b);
// for ascending order
// console.log(n);
// -ve: pehle a aayega fr b aayega
// +ve: b aayega fr a ayega

// for descending order
n.sort((a,b)=> b-a);
console.log(n);