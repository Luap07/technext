import React from 'react'
import { Menu, Search, Sun } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='header_wrapper'>

       <Menu  className='text-white'/>
       <Logo />
       <div className='header_icons'>
        <Sun 
        size={20} 
        className='text-white'/>
        <Search 
        size={20} 
        className='text-white'/>
       </div>
       </div>

    </header>
  )
}

export default Header