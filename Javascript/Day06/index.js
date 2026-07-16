// Strings and Dates in Js
// ways to create strings
// const str1="Vipin";
// const str2='Vipin Verma';
// const date=15;
// with the use of backtick it prefers most because it doesnot give errors when it starts to new line.
// const str3=`You are a frontend developer recently ${date}`;
// console.log(str1, str2,str3);
// String methods
// const str="We are trying to build right now";
// console.log(str.length);
// console.log(str[0]);
// console.log(str);
// spaces bhi count hote hai , aur space bhi ek character ki tarh treat hop rha hai

// uppercase
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// iski original value me koi change nhi aayega kyonki strings ar immutable
// indexOf
const str=`Hello I am currently learning js currently`
console.log(str.indexOf("curr"));
console.log(str.lastIndexOf("curr"));
console.log(str.includes('curr'));
// slice method
// ending index not included
console.log(str.slice(2,9));
console.log(str.slice(3));
// negative indices
console.log(str.slice(-4));
console.log(str.slice(-4,-2));
// when ending index not given , it retruns the whole string
// substring method
console.log(str.substring(2,5));
console.log(str.substring(-4));  
// negative indices support nhi krta hai

// concatenation of string
const a="Vipin";
const b="Verma";
const c= a+" "+b;
console.log(c);
console.log(24+"Rohit");
// Replace method;
const str1="We do not loose hope , we try to figure out everyday";
console.log(str1.replace("figure","figureit"));
// trim() method
// const user=" Vipin Verma ";
// console.log(user.trimStart());
// const names="Rohit,Mohit,Surya,Vijay,Animesh, Ankit";
// console.log(names.split(","));
// Dates
const today= new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getHours());
console.log(today.getSeconds());
// days: Mon-tue(1 based)
// Month: 0 1
// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,12,40,125);
// console.log(now);
// console.log(now.toString());
// Timestamp
const now = Date.now();
const dates = new Date(1784139051238);
console.log(dates);









