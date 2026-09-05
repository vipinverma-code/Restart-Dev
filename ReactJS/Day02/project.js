function Header({name}){
    return(
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}
function Main({user}){
    return(
        <>
        <h1>Hi{user.name}</h1>
        <h2>{user.age>18? "You are elegible to vote":"not eleigible"}</h2>
        <h3>You aur from{user.city}</h3>
        </>
  
    )
}
function Footer(){
    return(
        <h3>Thanks to all users for visiting our website</h3>
    )
}
function App(){
    return(
        <>
        <Header name="Vipin"></Header>
        <Main user={{ name:"Vipin",age:22,city:"LMP" }} />
        <Footer/>
        </>
    )
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

