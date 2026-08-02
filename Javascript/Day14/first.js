// console.log("Hello developers");
// creation of new element

// const newElement=document.createElement("h2");
// newElement.textContent="Things are on the way";
// newElement.id="second";
// console.log(newElement);

// select the element
// const element= document.getElementById("first");
// element.after(newElement);
// element.before(newElement);

// creating the another new element

// const anotherNewElement=document.createElement("p");
// anotherNewElement.textContent="Don't lose hope try to figure out the way , there should be any point where you got the way and crack it.";
// anotherNewElement.id="third";

// now selecting the element

// const element2=document.getElementById("second");
// element2.after(anotherNewElement);

// change the font size of anotherNewElement
// anotherNewElement.style.fontSize= "25px";


// creation of new element
// const newElement2=document.createElement('h3');
// newElement2.innerText="Rakshabandhan aa rha hai";
// newElement2.id="fourth";
// newElement2.className="diwali";
// newElement2.className="Holi";
// newElement2.classList.add("diwali");
// newElement2.classList.add("Holi");
// newElement2.style.backgroundColor="brown";
// newElement2.style.fontSize = "20px";
// newElement2.setAttribute("Hello","ji");
// console.log(newElement2);
// Selection of element
// const element4=document.getElementById("third");
// element4.after(newElement2);
// console.log(newElement2.getAttribute("id")); 
// console.log(newElement2.getAttribute("class")); 
// console.log(newElement2.getAttribute("src")); 
// console.log(newElement2.getAttribute("Hello")); 

// 
// const list = document.createElement("li");
// list.textContent = "Milk";
// const list2 = document.createElement("li");
// list2.textContent="Banana";
// const list3 = document.createElement("li");
// list3.textContent="Apple";
// const list4 = document.createElement("li");
// list4.textContent="Paneer";

// const unorderedelement=document.getElementById("listing");
// unorderedelement.append(list);
// unorderedelement.append(list2);
// unorderedelement.prepend(list3);
// paneer milk ke baad aaye
// list.after(list4);
// console.log(unorderedelement.children[1].after(list4));

// ab real time me kaise backend se ui per data dikhate hai
const arr = ["Milk","Halwa","Paneer","tofu","Tea"];
// parent ko select krna jnha ye list ke items daalne hai ;
const unorderedELement=document.getElementById("listing");
const fragment=document.createDocumentFragment();

for(let food of arr){
    const list=document.createElement("li");
    list.textContent= food;
    // unorderedELement.append(list);
    // optimizecd code 
    fragment.appendChild(list);
//   const arr1=[...list];
    
}
unorderedELement.append(fragment);


// now we learn how to delete an element
// phle us element ko select krte useImperativeHandle(

const del=document.getElementById("first");
del.remove();


// create the element
const marketing=document.createElement("p");
marketing.textContent="marketing is a good space to excel";
marketing.id="mnc";
console.log(marketing);
// now show on ui , so select the element , if html code have no element only body
document.body.append(marketing);



// now learn about the older syntax

const months=document.getElementById("month");
console.log(months.children);
console.log(months.childNodes);

// create a new list 
const lister= document.createElement("li");
lister.textContent = "Help";
months.insertAdjacentElement("afterbegin",lister)

