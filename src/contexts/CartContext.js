import React, { createContext , useState } from 'react';
import { toast } from 'react-toastify';


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState ([])

    const addToCart = (count , product) => {
        if(isInCart(product.id)){
            toast.error(`The product is already in cart`)
        }else{
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
        }   
    } 
    const removeItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id)
        setCartArray(updatedCart)
        toast.error(`The product was removed from the cart`)
    }
    const clearCart = () => {
        setCartArray([])
        toast.error(`All products have been removed from the cart`)
    }
    const finishPurchase = () => {
        setCartArray([])
        toast.success(`Thank you for your purchase`)
    }
    const productAcc = () => {
        return cartArray.reduce((acc,item) => acc = acc + item.count , 0)
    }
    const totalPrice = () => {
        return cartArray.reduce((acc, element) => acc = acc + (element.item.price*element.count),0)
    }
    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id)
    }

    const value = {
        cartArray,
        addToCart,
        removeItem,
        clearCart,
        productAcc,
        totalPrice,
        isInCart,
        finishPurchase
        
    }
  return (
  <CartContext.Provider value={value}>  
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider;
