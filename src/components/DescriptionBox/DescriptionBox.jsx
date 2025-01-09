import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="description-navigator">
            <div className="nav-box">Description</div>
            <div className="nav-box fade">Reviews (122)</div>
        </div>

        <div className="description">
            <p>An innovative e-commerce platform offering a wide range of quality products at competitive prices. Enjoy seamless shopping with secure payment options, fast delivery, and exceptional customer support. Discover deals and exclusive collections tailored to your preferences.</p>
            <p>Our user-friendly platform provides an intuitive browsing and checkout experience, supported by secure payment gateways and multiple payment options. Enjoy competitive pricing, regular discounts, and exclusive offers on top brands. With fast and reliable shipping, easy returns, and 24/7 customer support, we prioritize your convenience and satisfaction. Shop confidently with us, knowing we are committed to delivering quality, value, and an unparalleled shopping experience.</p>
            
        </div>
    </div>
  )
}

export default DescriptionBox 