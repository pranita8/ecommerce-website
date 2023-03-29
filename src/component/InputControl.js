import React from "react";
import './InputControl.css';

function InputControl(props) {
  return (
    <div className="textfield">
      <input type="text" {...props} />
      <span></span>
      {props.label &&
       <label >{props.label}</label>}
    </div>
  );
}

export default InputControl;