import React from "react";
import './Input.css';

function Input(props) {
  return (
    <div className="textfield">
      <input type="text" {...props} required/>
      <span></span>
     
      {props.label &&
       <label>{props.label}</label>}
    </div>
  );
}

export default Input;