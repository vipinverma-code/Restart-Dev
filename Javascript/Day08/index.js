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

const user={
    name:"Vipin",
    age:20,
    emailId:"vipinverma@gmail.com",
    amount:350000,
    "home address":"lmp"
}

const name=user.name;;
const age=user.age;
console.log(name);
console.log(age);