import React, { createContext, useEffect, useState } from 'react'

export const CartContext=createContext();
export const CartContextProvider=({children})=> {
    const [cartList,setCartList]=useState(JSON.parse(localStorage.getItem("cartList"))||[]);
    useEffect(()=>{
      localStorage.setItem('cartList', JSON.stringify(cartList))
    },[cartList])
    const addToCart=(product)=>{
        setCartList([...cartList,{...product,quantity:1}]);
    }
    const updateCart=(id,type)=>{
        const updatedCart=cartList.map(item=>item.id===id?{...item,quantity:type==='increase'?item.quantity+1:item.quantity-1}:item);
        setCartList(updatedCart);
    }
    const removeFromCart = (index) => {
      setCartList((prevItems) => {
        
        return [
          ...prevItems.slice(0, index), // Items before the index
          ...prevItems.slice(index + 1), // Items after the index
        ];
      });
    };
  return (
    <CartContext.Provider value={{addToCart,cartList,updateCart,removeFromCart} }>
      {children}
    </CartContext.Provider>
  )
}

