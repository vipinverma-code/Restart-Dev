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

// const array=[10,202,30,6,0,84,0,6,4];
// const finalarr=array.map((num)=>{
//     return num*2;
// })
// console.log(finalarr);

// const arr=[1,2,3,4,5,6];
// const newarr= arr.map((num)=>{
//     return num*2;
// });
// console.log(newarr);

// Real world uses

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// chaining of methods
// const newProducts= products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({
//     name:product.name,
//     price:product.price,

// }));
// console.log(newProducts);

// use of map() method
// finalout= products.map((product)=>({
//     name:product.name,
//     price:product.price

// }));
// console.log(finalout);


// reduce method
// accumulator=0, 
// initial value=0;
// const result=products.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue.price;
//     if (currentValue.inStock){
//         return accumulator+currentValue.price;
//     }
//     else{
//         return accumulator;
//     }
// },0);
// console.log(result);


// use of reduce method to find the sum of numbers

// const arr=[10,30,56,89,56];
// const sum= arr.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0);
// console.log(sum);

// find the maximum number
// const max= arr.reduce((acc,num)=>{
//     return acc>num?acc:num;
// })
// console.log(max);

// Data Structure: set

// it will give syntax error :unexpected number
// const set={10,20,30,45,65};
// console.log(set);

// const arr=[12,34,5,6,8,9,8];
// console.log(arr);
// const s1= new Set(arr);
// s1.add(10);
// console.log(s1);
// console.log(s1.has(34));
// s1.delete(10);
// console.log(s1);
// s1.clear();
// console.log(s1);


// Remove the duplicate elements from the array
const email=["ro@gm","ra@gm","mo@gm","ro@gm"];
// convert into set
// const s1=new Set(email);
// console.log(s1);
// convert into again array
// const newEmail=[...new Set(email)];
// console.log(newEmail);

// now iteration over set

// const s1=new Set(email);
// for(let num of s1 ){
//   console.log(num);
// };
