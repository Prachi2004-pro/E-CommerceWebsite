import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import Instagram_icon from '../Assets/instagram_icon.png'
import Pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPNEST</p>
        </div>
        <ul className='link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className="containerBox">
                <img src={Instagram_icon} alt="instagram-icon" />
            </div>
            <div className="containerBox">
                <img src={Pinterest_icon} alt="instagram-icon" />
            </div>
            <div className="containerBox">
                <img src={whatsapp_icon} alt="instagram-icon" />
            </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>Copyright @ 2024 SHOPNEST - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer