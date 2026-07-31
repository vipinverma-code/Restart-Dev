console.log("Hello developers");
// creation of new element

const newElement=document.createElement("h2");
newElement.textContent="Things are on the way";
newElement.id="second";
console.log(newElement);

// select the element
const element= document.getElementById("first");
element.after(newElement);
// element.before(newElement);

// creating the another new element

const anotherNewElement=document.createElement("p");
anotherNewElement.textContent="Don't lose hope try to figure out the way , there should be any point where you got the way and crack it.";
anotherNewElement.id="third";

// now selecting the element

const element2=document.getElementById("second");
element2.after(anotherNewElement);

// change the font size of anotherNewElement
anotherNewElement.style.fontSize= "25px";