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