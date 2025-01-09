import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='ProductDisplay'>

        {/* display-left */}
        <div className="display-left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-image">
                <img className='display-main-image' src={product.image} alt="" />
            </div>
        </div>

        {/* display-right */}
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

            {/* Prices */}
            <div className="right-prices">
                <div className="old-price">
                    ${product.old_price}
                </div>
                <div className="new-price">
                    ${product.new_price}
                </div>
            </div>

            {/* Description */}
            <div className="right-description">
            This sophisticated A-line midi cloth is designed to elevate your wardrobe with its timeless elegance. Crafted from a soft, breathable blend of cotton and polyester, it offers both comfort and durability. Making it perfect for formal events, date nights, or office wear. Available in sizes XS to XXL.
            </div>
            
            {/* size */}
            <div className="right-size">
                <h1>Select size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button> 
            <p className='right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className='right-category'><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay