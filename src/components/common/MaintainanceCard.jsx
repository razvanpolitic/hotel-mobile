import React, { useState } from 'react';
import "./maintainancecard.css"

const MaintainanceCard = (props) => {
  return (
    <>
      {props.selectedComment?.id === props.room_no && props.selectedComment?.task === props.comment ?
        <div className="main-card-container" style={{ border: `2px solid ${props?.backgroundColor}` }}>
          <div className="room-no" style={{ background: props?.backgroundColor}}>{props?.room_no}</div>
          <div className="resolve-section">
            <div className='resolved-text'>Resolved?</div>
            <div className='approved-container'>
              <div className='yes' onClick={() => props.setSelectedIdComment({id: props.room_no, task: props.comment})}>Yes</div>
              <div className='no' onClick={() => props.setSelectedComment("")}>No</div>
            </div>
          </div>
        </div>
        :
        <div className="main-card-container" style={{ border: `2px solid ${props?.backgroundColor}` }} onClick={props.onCardClick}>
          <div className="room-no" style={{ background: props?.backgroundColor}}>{props?.room_no}</div>
          <div className="comment-section">{props?.comment}</div>
        </div>
      }
    </>
  )
}

export default MaintainanceCard