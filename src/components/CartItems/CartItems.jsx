import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from'../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cart-items'> 
        <div className="cart-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItem[e.id]>0)
            {
                return (
                <div>
                    <div className="cart-format cart-format-main">
                        <img src={e.image} alt="" className='cartIcon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cart-quantity'>{cartItem[e.id]}</button>
                        <p>${e.new_price*cartItem[e.id]}</p>
                        <img className='remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr/>
                </div>
                );
            }
            return (null);
        })}
        <div className="cartItem-down">
            <div className="cart-item-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="total-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="total-items">
                       <h3>Total</h3>
                       <h3>${getTotalCartAmount()}</h3>     
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promo-code">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems;