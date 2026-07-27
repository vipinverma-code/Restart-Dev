// forEach, filter, reducer, map,set
// const arr=[10,20,30,"Rohit",90];
// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// })
// let sum=0;
// arr.forEach((num)=>{
//     sum+=num;
// })
//  console.log(sum);
// filter

// const newarr=arr.filter((number)=>{
//     return number>25;
// });
// console.log(newarr);

// arr.filtering=function(compare){
//     const ans =[];
//     for(let num of arr){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr = arr.filtering((num)=>num>25);
// console.log(newArr);

// Map method

const array=[10,202,30,6,0,84,0,6,4];
const finalarr=array.map((num)=>{
    return num*2;
})
console.log(finalarr);