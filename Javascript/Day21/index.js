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
