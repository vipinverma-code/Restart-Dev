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
// JSX ---> React.createElement() --> React Element(JS object)----> Real DOM (HTML Element)
// const element= <h1 id="title">Hello Developers!, how are you</h1> --->React.createElement('h1',{id:'title'}, "Hello Developers")--->{type:"h1",props:{id:"tile",children:"hello developers"}}---><h1 id="title">Hello Developers!, how are you</h1>

const element= <h1 id="title">Hello Developers!, how are you</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

const element2=(<div>
  <h1>
    Hello Vipin!
  </h1>
  <h2>
    hii, what are you currently doing?
  </h2>
</div>
)
// root.render(element2);

// const element3=(
//     <>
//     <h1>Hello Vipin!</h1>
//     <h2>How you are nerd from the childohood in studies</h2>
//     </>
// )

// React Component

function App(name){
    return(
        <h1>Hello World Technology!{name}</h1>
    );
}
const data=App("VipinVerma");


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render only ek argument leta hai, baaki arguments ko ignore kr deta hai error show nhi krta hai
// root.render(App(),element,element2);
// root.render(<App/>);
// dono elements , App function ka data sb ui per aise kr skte hai;

root.render(
    <>
    {data}
    {element}
    {element2}
    </>
)
