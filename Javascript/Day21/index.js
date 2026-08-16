// Prototype and classes i javascript
const obj={
    name: "Rohit",
    age:25,
    greet:function(){
        console.log("Hello ji");
    }
};
// const arr=[10,20,30];
// console.log(arr.length);
const obj2={
    account:30
}

obj2.__proto__ = obj;
console.log(obj2.name);
// console.log(obj);
// console.log(obj.name);
// obj.greet();
console.log(obj.hasOwnProperty("name"));

// const obj1={
//     name:"Vipin",
//     age:30,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj3={
//     name:"Mohan",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }

// const person1= new Person("Rohit",20);
// const person2= new Person("Vipin",22);
// console.log(person1);
// console.log(person1.name);
// console.log(person1.sayHi());


// const obj3={
//     name:"Vipin",
//     age:20,
//     greet:function(){

//     }
// }
// console.log(obj3);

// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayHii(){
//         console.log(`Hii ${this.name}`);
//     }
// }

// const student1= new Student("Vipin",22);
// console.log(student1.name);


// now i am just creating raw banking appication

// class Customer extends Person{
//     constructor(name,age,account,balance){
//         super(name,age);
//         this.account= account;
//         this.balance=balance;
//     }

//     checkBalance(){
//         return this.balance;
//     }
// }

// const customer1= new Customer("Mohan",20, 12,878);
// console.log(customer1.name);
// console.log(customer1.balance);
// console.log(customer1.age);

const obj4={
    name:"Vipin Verma",
    age:22,
    profession: "Frontend Developer & Entrepreneur",
}

const obj5= Object.create(obj4);
obj5.account=22999;
console.log(obj5);
