import React from "react";
import { Link } from "react-router-dom";
import "./Sections.css";
const Sections = (props) => {
  return (
    <>
      <div className="product-container">
        <div className="sticky">
          <h2 className="product-heading">{props.type[0].desc}</h2>
        <Link to={"/allproducts"} >
          <button className="btn">View All</button>
          </Link> 
          <img
            className="everything"
            src={props.type[0].url}
            alt="img"
          ></img>
        </div>
        <div className="images">
          {props.images.map((image, index) => (
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
    </>
  );
};

export default Sections;