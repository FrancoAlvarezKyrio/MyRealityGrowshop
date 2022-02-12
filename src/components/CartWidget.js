import React, { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import { Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
  
  const { productAcc } = useContext(CartContext)

  return (
      <div id='divCartWidget'>
        <Link to="/cart"><BsCart size="30px" id='cartWidget'/></Link><Badge id='badge'>{productAcc()}</Badge>
      </div>
  )
};

export default CartWidget;


