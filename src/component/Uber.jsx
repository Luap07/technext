import React from 'react'
import assets from '../assets';
import './Uber.css';

const Uber = () => {
  return (
    <div
    className='uber_container'>
        <img 
        src={assets.leo}
        className='uber_img' />
        <div 
        className='uber_left'>
            <h3> Boluwatife Ayo-Odewale</h3>
            <p> 1 day ago</p>
            <div
            className='uber_right'>
            <h2> Read More </h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
            </div>
               
                
                   </div>
        </div>
        
    
  )
}

export default Uber