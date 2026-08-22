// attributes={
//     className:"element",
//     id:"first"
// }
// custom react
// const React={
//     // createElement is a method
//     createElement:function(tag,attributes,children){
//         const element= document.createElement(tag);
//    element.textContent= children;
//    for(const key in attributes){
//     if(key==='style'){
//         Object.assign(element.style, attributes.style);
//     }
//     else{
//         element[key] = attributes[key];
//     }   
// }
// return element;
//     }
// }
// const ReactDOM = {
//     render:function(child,parent){
//         parent.append(child);
//     }
// }

// Original React
const React={
    createElement: function(type,props,children){
        return{
            type:type,
            props:{
                ...props,
                children:children
            }
        }
    }
}

const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Vipin?");
const element2=React.createElement("p",{"id":"para","className":"paragraph",style:{fontSize:"20px",backgroundColor:"pink", color:"green"}},"Hello , Vipin , you are a good developer");

console.log(element1);







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
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);
// root.append(element1);
// root.append(element2);
// Create a parent element



