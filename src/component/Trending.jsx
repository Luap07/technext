import React from 'react'
import './Trending.css'
import Conversations from './Conversations'
import assets from '../assets';


const article = [
  {id:1,divider:true, title:"Meet Switch Electric whose peer-to-peer metering hardware has gathered 15,000 pre-orders", author:'Ejike Kanife', image:assets.featured },
  {id:2, divider:true, title:"Bolt Nigeria opens on 'dispute'with e-hailing union  ", author:'Ejike Kanife', image:assets.image },
  {id:3, divider:true, title:"A chat with Segun Adeyemo about SAVA and pioneering growth as a service for African startups", author:' Godfrey Elimian', image:assets.screenshot },
  {id:4, title:"Exclusive: Bitmama acquires Payday, backend transition already ongoing", author:' David Afolayan', image:assets.banner },
  
]

const Trending = () => {
  return (
    <div className='trends'>
      <div className='trends_header'>
      <p>
        THIS WEEK'S
      </p>

      <h2>Leading Conversations</h2>
    </div>

    <div className="trends_content">
      {article.map(item => (
        <Conversations
        key={item.id}
        divider={item.divider}
        title={item.title}
        author={item.author}
        image = {item.image}
        />
        

      ))}
      </div>
     </div>
    
    
  )
}



export default Trending