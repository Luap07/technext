import React from 'react'
import Header from './component/Header';
import './index.css';
import Featured from './component/Featured';
import Trending from './component/Trending';
import FreshlyPressed from './component/FreshlyPressed';
import Smart from './component/Smart';
import Newsletters from './component/Newsletters';
import Sponsored from './component/Sponsored';
import Footer from './component/Footer';




function App(){
  return (
  <div> 
    <Header />
    <div className='container_wrapper'>

    <div className='article_showcase'>
      <Featured />
      <Trending />
    </div>

      <FreshlyPressed />
               {/* <Smart />  */}
      <div className='container'>
      <Sponsored /> 
        
      
      <Newsletters /> 
      <Footer /> 
      </div>
      </div>

    </div>

  
  )
}

export default App

