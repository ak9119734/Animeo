import React, { useState } from 'react'

const CharacterItem = ({ item }) => {
  const [isRotated,setIsRotated]=useState(false);
  const onClickHover= ()=>{
    setIsRotated(!isRotated)
  }
  return (
    <div onClick={onClickHover} className='card'>
      <div className='card-inner'>
        {!isRotated?  <div className='card-front'>
          <img src={item.image} alt='' />
        </div>:   <div className='card-back'>
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Original title:</strong> {item.original_title}
            </li>
            <li>
              <strong>Director:</strong> {item.director}
            </li>
            <li>
              <strong>Released date:</strong> {item.release_date}
            </li>
            <li>
              <strong className='descWrapper'>Description:</strong> {item.description}
            </li>
          </ul>
        </div> }
      
     
      </div>
    </div>
  )
}

export default CharacterItem