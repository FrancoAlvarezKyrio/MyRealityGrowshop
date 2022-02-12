import { useState } from 'react';

const ItemCount = ({ stock, initial , onAdd}) => {
    const [count,setCount] = useState(initial)
    
    const addCount = () =>{
        if(count <= stock){
            setCount(count + 1)
        }
    }
    const decreaseCount = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }
  return (
         <div className='countDiv'>
             <button id='decreaseButton' onClick={decreaseCount}>-</button>
             <p>{count}</p>
             <button id='addButton' onClick={addCount}>+</button>
             <button id='addToCartButton' onClick={()=> onAdd(count)}>Add to cart</button>
         </div>
  )
}

export default ItemCount;
