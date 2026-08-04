// function handleClick(){
//     const element= document.getElementById("first");
//     element.textContent="It is time to take action against who don't believe in you";
// }


const element = document.getElementById("second");
// element.onclick=function handleClick(){
//     element.textContent="Try to rebuild yourself";
// }

element.addEventListener('click',()=>{
    element.textContent = "Strike is Coming";
});
element.addEventListener('click',()=>{
    element.style.backgroundColor="brown";
});

let a ={
    greet:function(value){
        console.log("Hello", value);
    }
}
a.greet(30);
a.greet(40);

