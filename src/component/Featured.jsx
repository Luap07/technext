import React from 'react'
import './Featured.css';
import assets from '../assets';
import Avatar from './Avatar';


const Featured = () => {
  return (
    <div className='feature'>
       <img 
       src={assets.first}
       className='featured_image'
       />       
       <h1 className='feature_heading'>
        <a>
        Revolutionising lending: Renmoney's journey
        into becoming a credit leader in Nigeria
        </a>
       </h1>
       <Avatar /> 
        
    </div>
  )
}

export default Featured