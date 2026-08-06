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

// const childs = document.querySelectorAll(".child");
// childs.forEach((child)=>{
//     child.addEventListener('click',()=>{
//         child.textContent="I'm clicked";
//     });
// });

const parent = document.getElementById("parent");
console.log(parent.children);
for(let child of parent.children){
//    console.log(child);
     child.addEventListener('click',()=>{
        child.textContent="I am clicked";
     })};

// const grandparent=document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log("Grandparent is clicked");
// },false);

// const parent= document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },false);

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log("child is clicked");
// },true);

// const grandparent=document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log(e.target);
//     console.log("Grandparent is clicked");
// });

const parent= document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    e.stopPropagation();
    // console.log("Parent is clicked");
});

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log(e);
    // console.log(e.target);
    // e.stopPropagation();
    console.log("child is clicked");
});

// capture phase on hai: Top se down aaoge: Us time per event ko trigger kar diya jayega.
// caputre phase off hai: Event hai usko down to up (Bubbling phase bolte hai, tabb trigger krte hai)
