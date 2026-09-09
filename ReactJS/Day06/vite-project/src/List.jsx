import {useState} from 'react'
import Food from './Food.jsx'
function List(){
    const [foodItems,setFoodItems]=useState(["Apple","Orange","Banana"]);
    function handleChange(){
        setFoodItems(["Mango",...foodItems]);
    }
    return(
        <>
        <h1>Food Items:{foodItems}</h1>
        <button onClick={handleChange}>Increment</button>
        <Food foods={foodItems} />
        </>
    )
}
export default List;