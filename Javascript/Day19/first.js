// console.log("Hello World Start");
// code
// const p1= fetch("https://api.github.com/users");
// console.log(p1); 
// yanha per data ko turant read nhi krenge
// ya to client kr request server fullfilled kr de ya reject kr de 
// const p2=p1.then((response)=>{
//     // console.log(response);
//     // ynha per jo response aata hai vo raw bytes ki form me hota hai.
//     // isliye hmse isse object me convert krna hoga
//     return response.json();
// })
// p2.then((response)=>{
//     console.log(response);
// })
// console.log("Hello World End");
// Now, I am doing the same thing with the help of chaining
// fetch("https://api.github.com/uses")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Data is not present in the server");
//     }
//     return response.json();
// }).then((data)=>{
//     // console.log(data);
//     for(let userimage of data){
//     const parent=document.getElementById("first");
//     const img=document.createElement('img');
//     img.style.width="50px";
//     img.style.height="60px";
//     img.src=userimage.avatar_url;
//     parent.append(img);
//     };
// }).catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent=error.message;
// });
// console.log("Hello World End");




// concept of json and js object

// const j1={
//     name: "Rohit",
//     age:30,
//     address: "dwarka",
//     c:undefined,
// }
// // the above code is js object now convert it into json
// const jsonformat= JSON.stringify(j1);
// console.log(jsonformat);

// // now write the json format
// const jsonFormat = `{
//     "name":"Vipin Verma",
//     "age":22,
//     "address":"lmp",
//     "profession":"developer & entrepreneur"
// }`;
// console.log(typeof(jsonFormat));
// // now convert it into js object
// const JsObject=JSON.parse(jsonFormat);
// console.log(JsObject);
// console.log(typeof (JsObject));



// Now I am going to learn about how to create promises

const p1= new Promise((resolve,reject)=>{
    resolve("hello")
    // reject("hello");
    // here reject("hello") gives error unhandeled rejection
});
// console.log(p1);
p1.then((response)=>{
    console.log(response);

}).catch((error)=>{
    console.log(error);
})

// now we will learn how to reolve the issue of callback hell
