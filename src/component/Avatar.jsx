import React from 'react'
import assets from '../assets'
import './Avatar.css';



const Avatar = () => {
  return (
    <div 
    className='avatar_container'>
        <img 
        src={assets.avat}
        className='avat_img'
        />
        <div className='avat_right'>
            <h3>
               Godfrey Elimian
            </h3> 
            <p>2 days ago</p>
                   
        </div>
    </div>
  )
}

export default Avatar