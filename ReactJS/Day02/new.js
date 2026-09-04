// text/element : Js ke expreession likh skte hain
// Number,string ,array render ho jayega aur display bhi hoga
// true,false,null,undefined (render honge lekin kuch display nhi hoga screen pe )
// Object: error dega 
// const element=<h1>Hello Vipin Verma Frontend Developer {10+20}</h1>;
// const courses=["HTML","CSS","Bootstrap","Javascript"];
// // now i have to show these courses on ui
// const newelement=<ul>
//     {courses.map(course=><li>{course}</li>)}</ul>
// // const element2=<h2>Hello {{ "name":"Vipin Verma","age":"20" }}</h2>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//     {element}
//     {newelement}
//     </>
// );
// now i am learning the concept of props
// function App(props){
//     return(
//         <h1 style={props.style}>Hii, I am Vipin Verma frontend developer{props.location} {props.age}</h1>
//     )
// }
// const amaze = <App location="in  lko" age={22} style={{ backgroundColor:"red", color:"white" }}/>
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(amaze);

// Now I am doing practical

function Navbar(){
    return(
        <h1>FRONTEND DEVELOPER</h1>
    )
}

function Profile(props){
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h2>
                Role:{props.role}
            </h2>
        </div>
        
    )
}
// const skills=["HTML","CSS", "Javascript","React"]
// const data= skills.map(skill=><span>{skill}</span>)

function Skills(props){
    return(
        <div>
            <h1>Skills:{props.skills.map(skill=><span key={skill}>{skill}|</span>)}</h1>
        </div>
    )
}

function Footer(props){
    return(
        <h1>Experience:{props.experience}</h1>
    )
}

function App(){

    const skills=["HTML","CSS", "Javascript","React"]
    // const data= skills.map(skill=><span>{skill}</span>)
    return(
        <>
        <Navbar/>
        <Profile name={"Vipin Verma"} role={"Frontend Developer"} />
        <Skills skills={skills} />
        <Footer experience={"Fresher"}/>
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)