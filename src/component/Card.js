import React from 'react'
import Cards from './Card.css'

function Card({data}) {
  return (
    <div className='card-container'>
    {
        data.map((curElem) => {
            return(<>
      <div className='card'>
      <img src={curElem.src}/>
      <p>{curElem. product}</p>
      <p>{curElem.price}</p>
      </div>
            </>)
     
    })
    }
  
    </div>
  )
}

export default Card;