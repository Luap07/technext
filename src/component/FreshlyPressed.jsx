import React from 'react'
import './freshlyPressed.css';
import assets from '../assets';
import Smart from './Smart';

const article = [
  {id:1, image:assets.fist, info:"NEWS", title:"African e-commerce giants Wasoko and MaxAB announce Merger of Equals for digital retail dominance", avatar:assets.ohk, author:"Boluwatife Ayo-Odewale", date:"1 day ago", more:"Read More",},
  {id:2, image:assets.img, info:"NEWS", title:"AWS expands commitment to support Nigeria's tech drive in collaboration with FG", avatar:assets.avat, author:"Godfrey Elimian", date:"2 days ago", more:"Read More",},
  {id:3, image:assets.design, info:"NEWS", title:"Nigeria's Jenseys AI secures $1.1million pre-seed funding to boost global B2B payments", avatar:assets.ohk, author:"Boluwatife Ayo-Odewale", date:"7 days ago", more:"Read More",},
  {id:4, image:assets.ok, info:"NEWS", title:"Nexal Gaming to launch Africa's LinkedIn for gamers, Esports NG in 2024", avatar:assets.ref, author:"Temitope Adekunle", date:"7 days ago", more:"Read More",},

]

const FreshlyPressed = () => {
  return (
    <div 
    className='fresh' >
      <div
      className='divider' />
      <div
      className='fresh_top'>
        <h2>Freshly Pressed</h2>
      </div>

      <div 
      className='fresh_content'>
        {article.map(item => (
          <Smart
          key={item.id}
          image={item.image}
          info={item.info}
          title={item.title}
          avatar={item.avatar}
          author={item.author}
          date={item.date}
          // more={item.more}
          />
        ))}
      </div>
      

    </div>
    

  )
}

export default FreshlyPressed