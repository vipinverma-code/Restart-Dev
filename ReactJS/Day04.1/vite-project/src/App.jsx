import { useState } from "react";
export default function App(){
    let [count,setCount]=useState(0);

    function IncreaseCount(){
        count++;
        setCount(count);
    }
    return (
      <>
        <h1>Counter:{count}</h1>
        <button style={{"fontSize":"15px"}} onClick={IncreaseCount}>Increment:{count}</button>
        
      </>
    );
}