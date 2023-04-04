import { async } from '@firebase/util';
import React,{useEffect, useState} from 'react'

<<<<<<< HEAD
=======

>>>>>>> e5c43e496c986ed2cb493e31b4e1019e561f837f
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

<<<<<<< HEAD
export default Allproduct;
=======
export default Allproduct;
>>>>>>> e5c43e496c986ed2cb493e31b4e1019e561f837f
