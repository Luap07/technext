import React from 'react';
import './Sponsored.css';
import assets from '../assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from './Slider';

const Sponsored = () => {
  return (
    <div 
    className='sponsor_head'>
    <div
    className='sponsor'>
      <h2>Sponsored</h2>
      <img
      src={assets.Highlights}></img>
      <div className="head_img">
        <img 
        src={assets.ok}></img>
      

      <h3>Highlights, big deals, impact and more from the Africa Fintech summit Lusaka 2023</h3>
      <div className='sponsor_icon'>
        <img 
        src={assets.Icon}> 
        </img>
        <h3>Tech Next</h3>

        <Slider />

       
        </div>
        </div>
        </div>
      </div>
    
    

  )
}

export default Sponsored