// function handleClick(){
//     const element= document.getElementById("first");
//     element.textContent="It is time to take action against who don't believe in you";
// }


// const element = document.getElementById("second");
// element.onclick=function handleClick(){
//     element.textContent="Try to rebuild yourself";
// }

// element.addEventListener('click',()=>{
//     element.textContent = "Strike is Coming";
// });
// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// });

// let a ={
//     greet:function(value){
//         console.log("Hello", value);
//     }
// }
// a.greet(30);
// a.greet(40);

const element2=document.getElementById("mess");
element2.addEventListener('dblclick', ()=>{
    element2.textContent="Let's focus on one thing at a time";
});
console.log(element2);

// const element=document.getElementById("child1");
// element.addEventListener('click',()=>{
//     element.textContent="It is clicked";
// });

// const element1=document.getElementById("child2");
// element1.addEventListener('click',()=>{
//     element1.textContent="It is clicked";
// });

// here i use querySelectorAll to all elements for apply event

const childs = document.querySelectorAll(".child");
childs.forEach((child)=>{
    child.addEventListener('click',()=>{
        child.textContent="I'm clicked";
    });
});

