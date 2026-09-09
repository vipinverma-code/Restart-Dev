import { useState } from "react";
function Counter(){
  let[count,setCount]=useState(0);
  console.log("Counter");

  function handleIncrement(){
    // count++;
    setCount(count+1);
    // setCount([...count,60]);
  }
// non-primitive data types me ui ki state reference ke basis per change hoti hai

  function handleDecrement(){
    // count--;
    setCount(count-1);
  }
    return (
      <>
        <p>This is the counter Application for me</p>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    );
}
export default Counter;