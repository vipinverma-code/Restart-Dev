import {useState} from 'react';
import { useEffect } from 'react';
function App(){
    const [users,setUsers]=useState([]);
    // const [name,setName]=useState("");
    const [count,setCount]=useState(30);
    useEffect(()=>{
            async function GithubProfile(params) {
              const response = await fetch(`https://api.github.com/users?per_page=${count}`);
              const data = await response.json();
              setUsers(data);
            //   console.log("Hello");
            }
            GithubProfile();
    },[count]);

    // function handleChange(e){
    //     // console.log(e.target.value);
    //     setName(e.target.value.toUpperCase());

    // }

    function handleCount(e){
       setCount(e.target.value)

    }
 
    
    // async function GithubProfile(params){
    //     const response= await fetch("https://api.github.com/users");
    //     const data = await response.json();
    //     setUsers(data);
    //     // console.log("Hello"); ye baar baar rerender  hone ki vjah se multiple times call ho rha hai.
    // }
    // GithubProfile();
    return(
        <>
        <h1>Github User</h1>
        {/* <input type="text" value={name} onChange={handleChange} /> */}
        <input type="number" value={count} onChange={handleCount}/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px" }}>
            {
                users.map((user)=>{
                    return(
                    <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}/>
                    )
              })
            }
        </div>
        </>
    )
}
export default App;