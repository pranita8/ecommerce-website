import { async } from '@firebase/util';
import React,{useEffect, useState} from 'react'

const Allproduct=({allprod}) =>{
console.log(allprod);  
  return (
    <div>
         <div className="images">
          {allprod.map((image, index) => (
            <div>
              <img
                className="img"
                key={index}
                src={image.src}
                alt={image.alt}
              />
              <div className="info">
                <h3>{image.product}</h3>
                <h4>{image.price}</h4>
                <h4>{image.desc}</h4>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Allproduct;


