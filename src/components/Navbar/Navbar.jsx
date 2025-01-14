import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
export const Navbar = () => {
  const [menu, setMenu] = useState("Home")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SHOPNEST</p>
        </div>
        <ul className='menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to="/men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to="/women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kid")}}><Link style={{textDecoration:'none'}} to="/kid">Kids</Link>{menu==="Kid"?<hr/>:<></>}</li>
        </ul>
        <div className='login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
            <div className="cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
export default Navbar