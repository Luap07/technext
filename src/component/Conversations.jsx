import React from 'react'
import './Coversations.css';


const Conversations = ({image, title, author, divider}) => {
  return (
    <div className='conversation'>
        <img 
        className='conversation_img'
        src={image}
        />
        <div className='conversation_typo'>
            <h2>{title}</h2>
            <h3>by {author} </h3>
            
            {divider && (
              <div className='divider'/>
            )}

        </div>
    </div>
  )
}

export default Conversations