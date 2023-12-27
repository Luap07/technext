import React from 'react'
import './freshlyPressed.css';
import assets from '../assets';

const FreshlyPressed = () => {
  return (
    <div 
    className='fresh_top' >
      <h1>
        Freshly Pressed
      </h1>
      <img src={assets.fist}
      className='fresh_img'
      />
      <h4>
        NEWS
      </h4>

      <h2>
        African e-commerce giants Wasoko and MaxAB announce "Merger of Equals" for digital retail dominance
      </h2>
    </div>
    

  )
}

export default FreshlyPressed