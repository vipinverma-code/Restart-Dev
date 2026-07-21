// Object is a collection of key-value pairs
// key value
// const user={
//     name:"Vipin",
//     age:20,
//     emailId:"vipinverma@gmail.com",
//     amount:350000,
//     "home address":"lmp"
// }
// console.log(user);
// console.log(typeof user);
// // for accessing the elements of object with their key value
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["amount"]);
// console.log(user["home address"]);

// CRUD operation: Create read Update ANd Delete

// update
// user.aadhar=458309741918;
// user.amount=50000000000;

// delete
// delete user.emailId;
// console.log(user);

// const user2=user;
// same ouput because of copy by reference
// user2.age=90;
// console.log(user);
// return all only keys of object
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// use of for in loop for find the keys and its values

// for(let keys in user){
//     console.log(keys,user[keys]);
// }

// const user={
//     name:"Vipin",
//     age:20,
//     emailId:"vipinverma@gmail.com",
//     amount:350000,
//     "home address":"lmp"
// }

// const name=user.name;;
// const age=user.age;
// console.log(name);
// console.log(age);

// Destructuring of Object
// const {name,age,amount,}=user;
// console.log(name,age,amount);
// // Destucturing of array
// const arr=[10,20,30,40];
// const [first,second]=arr;
// console.log(first,second);
// use of for of loop to find the key and values of Object
// for of loop array per lgta hai.
// for(let keys of Object.keys(user)){
//    console.log(keys);
// }

// for(let entries of Object.entries(user)){
//     console.log(entries);
// }
// function: independent scope
// function sum(a,b){
//     return a+b;
// }
// const result=sum(2,3);
// console.log(result);
// method: inside the object
// const role={
//     name:"Vipin Verma",
//     profile:"Frontend Developer",
//     experience:"6 months",
//     education:"b.tech",
//     greet:function(){
//         // console.log("I am trying to crack the opportunities");
//         return "lets try to crack";
//     }
// }
// const wish=role.greet();
// console.log(wish);
// use of this keyword
// const user1={
//         name:"Vipin Verma",
//     profile:"Frontend Developer",
//     experience:"6 months",
//     education:"b.tech",
//     greet:function(){
//         // console.log("I am trying to crack the opportunities");
//         // return "lets try to crack";
//         console.log(this.profile);
//     }
// }
// user1.greet();

// const user2={
//         name:"Sachin Verma",
//     profile:"Frontend Developer",
//     experience:"6 months",
//     education:"b.tech",
//     greet:function(){
//         // console.log("I am trying to crack the opportunities");
//         // return "lets try to crack";
//         console.log(this.education);
//     }
// }
// user2.greet();

// create object inside object:nested object

const student={
    name:"Vipin Verma",
    age:"22",
    // object inside object
    address:{
        city:"lmp",
        state:"uttar pradesh",
        village:"mohaddipur"
    }
}
// access the nested object value
// console.log(student.address.city);
// add property inside nested object
// student.address.pincode=262701;
// console.log(student);
// update
// student.address.city="lko";
// console.log(student);
// delete
// delete student.address.village;
// console.log(student);

// shallow copy
const person={
    name:"Vipin Verma",
    age:"22",
    // object inside object
    address:{
        city:"lmp",
        state:"uttar pradesh",
        village:"mohaddipur"
    }
}

// const person2={...person};
// with the spread operator hm dono ki independent copy bna rhe hai
// person2.name="ankit";
// person2.address.city="allahabad";
// console.log(person2);
// console.log(person);

// deep copy
const person2=structuredClone(person);
person2.address.village="ambarsot";
console.log(person2);
console.log(person);