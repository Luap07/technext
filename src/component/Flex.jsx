import React from 'react';
import './Flex.css';
import assets from '../assets';


const Flex = () => {
  return (
    <div className='flex_head'>
        <img
        src={assets.img}></img>
        <h2>NEWS</h2>
        <p>AWS expands commitment to support Nigeria's tech drive in collaboration with FG</p>
    </div>
  )
}

export default Flex