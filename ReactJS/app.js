// attributes={
//     className:"element",
//     id:"first"
// }
function createElement(tag,attributes,children){
   const element= document.createElement(tag);
   element.textContent= children;
   for(const key in attributes){
    element[key] = attributes[key];
}
return element;
}
const element1=createElement("h1",{className:"element",id:"first"},"Hello Vipin?");
const element2=createElement("p",{"id":"para","class":"paragraph"},"Hello , Vipin , you are a good developer");
// create a h1 element using js
// const element1=document.createElement("h1");
// element1.textContent="Coder Army";
// element1.className='element';
// element1.id="first";
// element1.style.fontSize="30px";
// element1.style.backgroundColor="orange";
// element1.style.color="white";
// // now i have to create  an other h2 element1
// const element2=document.createElement("h2");
// element2.textContent=" I am cracking the frontend developer role";
// element2.className='element';
// element2.id="second";
// element2.style.fontSize="30px";
// element2.style.backgroundColor="pink";
// element2.style.color="green";
// Now i have to connect this element with the dom
const root= document.getElementById('root');
root.append(element1);
root.append(element2);


