import {useState} from 'react'

function List(){
    const [foodItems,setFoodItems]=useState(["Apple","Orange","Banana"]);

    function handleChange(){
        setFoodItems(["Mango",...foodItems]);
    }
    return(
        <>
        <h1>Food Items:{foodItems}</h1>
        <button onClick={handleChange}>Increment</button>
        </>
    )
}
export default List;