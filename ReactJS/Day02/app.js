// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
// const rootelement= ReactDOM.createRoot(document.getElementById('root'));
// rootelement.render(element);
// creation of an element in the reactjs

// const paragraph= React.createElement('p',{id:"para"},"I am currently giving everything to become a frontend developer");
// rootelement.render(paragraph);

// now i am creating the another element
//  const heading=React.createElement('h1',{id:"heading"},"You have to push yourself daily");
//  rootelement.render(heading);

// now i want to show all the elements on the ui 
// so i have to put all the elements in the container

// const container=React.createElement(
//     'div',
//     null,
//     element,
//     paragraph,
//     heading,  
// );
// rootelement.render(container);


// JSX: Javascript XML: Look like HTML

const element= <h1 id="title">Hello Developers!, how are you</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);