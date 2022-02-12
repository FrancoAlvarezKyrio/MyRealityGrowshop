import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import Total from './Total';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {

const { cartArray , removeItem} = useContext(CartContext)
  return (

    <div id='cart'>
      {cartArray.length === 0 &&
    <div id='cartText'>
      <p>You have not selected any product</p>
      <Link to="/">Go to home</Link>
    </div>}
    
    {cartArray.length > 0 &&     
    cartArray.map(prod => <CartItem key={prod.item.id} product={prod} removeItem={removeItem}/>)}
    <Total/>

    </div>
  )
};
 
export default Cart;


