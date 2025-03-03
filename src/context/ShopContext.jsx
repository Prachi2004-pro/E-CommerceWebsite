import React, { createContext, useEffect, useState } from "react";
// import all_product from '../components/Assets/all_product';
// import CartItems from "../components/CartItems/CartItems";
//step1:create context
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
//step2:wrap all child into provider
const ShopContextProvider = (props) => {

    const [all_product,setAll_Product] = useState([]);
    const [cartItem, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://e-commerce-backend-59ko.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerce-backend-59ko.onrender.com/getcartitems',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerce-backend-59ko.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://e-commerce-backend-59ko.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
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