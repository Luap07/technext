import React from 'react'
import Header from './component/Header';
import './index.css';
import Featured from './component/Featured';
import Trending from './component/Trending';
import FreshlyPressed from './component/FreshlyPressed';
import Uber from './component/Uber';
import Smart from './component/Smart';
import Newsletters from './component/Newsletters';
import Sponsored from './component/Sponsored';
import Footer from './component/Footer';
import Slider from 'react-slick';



function App(){
  return (
  <div> 
    <Header />
    <div className='container'>
      <Featured />
      <Trending />
    </div>

      <FreshlyPressed />
       <Uber />
        <Smart />
      <div className='container'>
      <Sponsored />
      <Slider />
      
      <Newsletters />
      <Footer />
      </div>
    </div>

  
  )
}

export default App

