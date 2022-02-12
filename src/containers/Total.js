import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Card , Button } from 'react-bootstrap';
import { db } from '../firebase';
import { collection , addDoc } from "firebase/firestore"
import { toast } from 'react-toastify';


const Total = () => {
  const { productAcc, totalPrice , clearCart, finishPurchase } = useContext(CartContext)
  const [ order, setOrder ] = useState(false)

  const createOrder = () => {
    const productsCollection = collection(db, "orders")
    const user = {
      name : "",
      email: "",
      phone: ""
    }
    const order = {
      user
    }
    const request = addDoc(productsCollection, order)
    request
    .then((result)=>{
      setOrder(result.id)
      finishPurchase()
    })
    .catch((error)=>{
      toast.error(error)
    })
  }
  return(
    <div id='totalCart'>
        {productAcc()> 0 &&
                 <> 
        <Button className="clearCartButton" onClick={clearCart}>Clear cart</Button>
        <Card className="text-center">
         <Card.Header className='totalTitleText'>MyRealityGrowshop</Card.Header>
          <Card.Body>
              <Card.Text className='totalItemsText'>
                Total items: {productAcc()} Units
              </Card.Text>
              <Card.Text className='totalPriceText'>
                Total price: ${totalPrice()}
              </Card.Text>
          <Button variant="primary" onClick={createOrder}>Finish purchase</Button> 
          </Card.Body>
        </Card>  
        </>      
        }
       {order && 
       <Card id='divOrder' className="text-center">
          <Card.Body>
              <Card.Text className='totalPriceText'>
              Thanks for your purchase. Here its your Order ID: {order}
              </Card.Text>
          </Card.Body>
          <Card.Footer className='totalTitleText'>MyRealityGrowshop</Card.Footer>
        </Card>
        }
    </div>
  ) 
}

export default Total;
