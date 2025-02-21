import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imag from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
      {/* left */}
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hand-icon'>
              <p>New</p>
              <img src={hand_icon} alt="hand-icon" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
          </div>
          <button className="latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
          </button>
        </div>
        {/* right */}
        <div className="hero-right">
          <img src={hero_imag} alt="hero_image" />
        </div>
    </div>
  )
}

export default Hero