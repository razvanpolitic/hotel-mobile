import React, { useRef, useState } from "react";
import "./roomcard.css";
import user_icon from "../../assets/images/inhouse_view/user_icon.svg";
import checkin_icon from "../../assets/images/inhouse_view/checkin_icon.svg";
import checkout_icon from "../../assets/images/inhouse_view/checkout_icon.svg";
import CommonSmallCard from "./CommonSmallCard";
import MaintainanceModal from "./MaintainanceModal";
import { filterCardsData, maintainanceServiceData } from "../../constant/constant";

const RoomCard = (props) => {
  const [isMaintainanceModalOpen, setIsMaintainanceModalOpen] = useState(false);

  return (
    <>
      {props.selectedRoomId === props.room_no ?
        <div className="roomcard-container">
          {filterCardsData.map((data) => (
            <CommonSmallCard
              background={data.background}
              text={data.text}
              icon={data.icon}
              onClick={() => {props.setSelectedStatusAndId({id: props.room_no, housekeepingStatus:data.status}); props.setSelectedRoomId("")}}
            />
          ))}
          <div className="maintanance-card-icons" onClick={() => setIsMaintainanceModalOpen(true)}>
            {maintainanceServiceData.map((data) => (
              <div style={{ background: data?.background }}>
                <img src={data.icon} alt="icon"/>
              </div>
            ))}
          </div>
        </div>
        :
        <div className="roomcard-container" onClick={props?.onCardClick} style={{border: `2px solid ${props?.backgroundColor}`}}>
          <div className="left-icon-roomno-container" style={{backgroundColor: props?.backgroundColor}}>
            <img src={props?.icon} alt="icon" />
            <div>{props?.room_no}</div>
          </div>
          <div className="right--container">
            <div className="name-checkin-container">
              <div className="customer_name">{props?.customer_name}</div>
              <div className="check-status-section">
                <img src={checkin_icon} alt="checkin" />
                <div className="date-section">{props?.checkin_date}</div>
              </div>
            </div>
            <div className="checkout-container">
              <div className="check-status-section">
                <img src={user_icon} alt="user" />
                <div className="customer-count">{props?.customer_count}</div>
              </div>
              <div className="check-status-section">
                <img src={checkout_icon} alt="checkout" />
                <div className="date-section">{props?.checkout_date}</div>
              </div>
            </div>
          </div>
        </div>
      }
      {isMaintainanceModalOpen &&
        <MaintainanceModal data={props.data} onClose={() => setIsMaintainanceModalOpen(false)} id={props.selectedRoomId} setSelectedStatusAndId={props.setSelectedStatusAndId}/>
      }
    </>
  )
}

export default RoomCard