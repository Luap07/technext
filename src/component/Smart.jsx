import { ArrowRight } from 'lucide-react';
import './Smart.css';
import React from 'react';


const Smart = ({image, info, title, avatar, author, date, more}) => {
  return (
    <div className='smart'>
        <img
        className='smart_img'
        src={image}
        />
        <div 
        className='smart_details'>
            {info} </div>
            
            <div 
            className='smart_head'>

            <h2>{title}</h2>
        <div className='smart_arr'>
        <div 
        className='smart_avat'>
            <img 
            className='avat_img'
            src={avatar}></img>
            <div className='smart_info'>
            <h3>{author}</h3>
            <p>{date}</p>
            </div>
        </div>
        <button className='readmore_btn'>
           <h4>Read More</h4> 
           <ArrowRight  color='#fff' size={16} />
        </button>
          </div>
                </div>
    </div>
      )
}

export default Smart