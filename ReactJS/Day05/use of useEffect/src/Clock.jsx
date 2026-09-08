import { useEffect, useState } from "react";
function Clock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [show,setShow] = useState(true);
    useEffect(()=>{
           setInterval(() => {
             setTime(new Date().toLocaleString());
             console.log("hello");
           }, 1000);

    },[])
    // here in useEffect [], it is a empty dependency array.

    // setInterval(()=>{
    //     setTime(new Date().toLocaleString());
    //     console.log("hello");
    // },1000)
    return(
        <>
        <h1>Current Time:{time} </h1>
        <button onClick={()=>setShow(!show)}>{{show?"hide":"show"}}</button>
        </>
    )
}

export default Clock;