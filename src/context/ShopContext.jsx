import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product';
// import CartItems from "../components/CartItems/CartItems";
//step1:create context
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
//step2:wrap all child into provider
const ShopContextProvider = (props) => {
    const [cartItem, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // total CartAmount function
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = all_product.find((product) => product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextvalue = {all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}; //step3:create value
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;