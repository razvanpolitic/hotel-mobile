import React, { useState } from 'react';
import "./maintainancecard.css";
import close_icon from "../../assets/images/navbar/close_icon.svg";

const MaintainanceModal = (props) => {
  const [maintainanceComment, setMaintainanceComment] = useState("");
  
  const onMaintainanceHandler = () => {
    const isExist = props.data?.rooms.some((room) => room.id === props.id && room?.maintenance?.task1);
    const isExisttask2 = props.data?.rooms.some((room) => room.id === props.id && room?.maintenance?.task2);
    if(!isExist){
      props.data?.rooms?.map(function(obj) {
        (obj.id === props.id) && (obj.maintenance = {task1: maintainanceComment})
      });
    } else if (!isExisttask2 && isExist) {
      props.data?.rooms?.map(function(obj) {
        (obj.id === props.id) && (obj.maintenance = {task1: obj?.maintenance?.task1, task2: maintainanceComment})
      });
    }else{
      props.data?.rooms?.map(function(obj) {
        (obj.id === props.id) && (obj.maintenance = {task1: obj?.maintenance?.task1, task2: obj?.maintenance?.task2, task3: maintainanceComment})
      });
    }
    props.onClose();
  }

  return (
    <div className="main--container">
      <div className="modal_container">
        <div className='header'>
          <div className="maintanance-text">Maintenance</div>
          <img src={close_icon} alt="close" onClick={props.onClose}/>
        </div>
        <div className='textarea-form-container'>
          <textarea type="text" placeholder="Add comment" onChange={(e) => setMaintainanceComment(e.target.value)}/>
          <button onClick={() => onMaintainanceHandler()}>SAVE</button>
        </div>
      </div>
    </div>
  )
}

export default MaintainanceModal