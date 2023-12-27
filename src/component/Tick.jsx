import React from 'react';
import './Tick.css';
import assets from '../assets';

const Tick = () => {
  return (
    <div
    className='tick_head'>
      <img
      src={assets.avat}></img>
      <div 
      className='tick_left'>
        <h2>Godfrey Elimian</h2>
        <p>2 days ago</p>
        <div className='tick_right'>
        <h3>Read More</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
        

      </div>
      </div>
    </div>
  )
}

export default Tick