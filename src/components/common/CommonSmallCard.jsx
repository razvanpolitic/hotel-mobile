import React from 'react';
import "./filterpopup.css";

const CommonSmallCard = (props) => {
  return (
    <div style={{ background: props?.background, width: props.width}} onClick={props.onClick} className={`small-card ${props.isFilterPopUpActive ? props.selectedFilter?.includes(props.name) ? "" : "bg-active" : ""}`}>
      <img src={props?.icon} alt="icon" />
      <div className='card-text'>{props?.text}</div>
    </div>
  )
}

export default CommonSmallCard