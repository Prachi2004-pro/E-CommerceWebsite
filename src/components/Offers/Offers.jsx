import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Fashion_offer-removebg-preview.png'
// import special_offer from '../Assets/Offer_image.png'

export const Offers = () => {
  return (
    <div className="Offers">
        <div className='left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='right'>
            <img src={exclusive_image} alt="" />
        </div>
        {/* <div className='offer-right'>
            <img src={special_offer} alt="" />
        </div> */}
    </div>
  )
}

export default Offers