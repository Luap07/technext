import './Smart.css';


const Smart = ({image, info, title, avatar, author, time, more}) => {
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
        <div 
        className='smart_avat'>
            <img 
            className='avat_img'
            src={avatar}></img>
            <h3>{author}</h3>
            <p>{time}</p>
            <h2>{more}</h2>
            
        </div>
                </div>
    </div>
      )
}

export default Smart