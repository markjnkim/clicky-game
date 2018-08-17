import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  // <div
  //   role="img"
  //   aria-label="click item"
  //   onClick={ () => props.handleClick(props.id) }
  //   style={{ backgroundImage:`url("${props.image}")` }}
  //   // className = { `click-item${props.shake ? " shake" : ""}` }
  // />
  // <div className="clickItem">
  //   <img src={props.image} alt="image" />
  //   <p>id = {props.id}</p>
  //   <p>key = {props.key}</p>
  // </div>
  <div>
    <li>
    id: {props.id}
    </li>
    <li>
    <img src={props.image} 
      alt="image" 
      width="100px" 
      height="100px" 
      onClick={
        ()=>props.handleClick(props.id)
      }
    />

    </li>
   
  </div>
)

export default ClickItem;