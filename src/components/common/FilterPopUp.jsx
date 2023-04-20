import React, { useState } from "react";
import "./filterpopup.css";
import CommonSmallCard from "./CommonSmallCard";
import inspected_icon from "../../assets/images/inhouse_view/inspected_icon.svg";
import clean_icon from "../../assets/images/inhouse_view/clean_icon.svg";
import dirty_icon from "../../assets/images/inhouse_view/dirty_icon.svg";
import dnd_icon from "../../assets/images/inhouse_view/dnd_icon.svg";
import out_of_order_icon from "../../assets/images/inhouse_view/out_of_order_icon.svg";
import out_of_service_icon from "../../assets/images/inhouse_view/out_of_service_icon.svg";
import pickup_icon from "../../assets/images/inhouse_view/pickup_icon.svg";

const FilterPopUp = (props) => {
  const floors = [1, 2, 3, 4, 5, 6];
  const filterCardsData = [
    {
      icon: dirty_icon,
      text: "Dirty",
      name: "dirty",
      background: "#E10534",
    },
    {
      icon: clean_icon,
      text: "Clean",
      name: "clean",
      background: "#1DA6E9",
    },
    {
      icon: pickup_icon,
      text: "Pick-up",
      name: "pickup",
      background: "#F5A622",
    },
    {
      icon: inspected_icon,
      text: "Inspected",
      name: "inspected",
      background: "#54A92D",
    },
    {
      icon: dnd_icon,
      text: "DND",
      name: "DND",
      background: "#26D6CF",
    },
    {
      icon: out_of_order_icon,
      text: "Out Of Order",
      name: "OOO",
      background: "#404040",
    },
    {
      icon: out_of_service_icon,
      text: "Out Of Service",
      name: "OOS",
      background: "#404040",
    },
  ];

  const selectedFilterArray = (text) => {
    const isExits = props.selectedFilter.includes(text);
    if (isExits) {
      const filterdValues =
        props.selectedFilter &&
        props.selectedFilter.filter((val) => val !== text);
      props.setSelectedFilter(filterdValues);
    } else {
      props.setSelectedFilter([...props.selectedFilter, text]);
    }
  };

  const selectedFloorHandler = (data) => {
    const isExits = props.selectedFloor.includes(data);
    if (isExits) {
      const filterdValues =
        props.selectedFloor &&
        props.selectedFloor.filter((val) => val !== data);
      props.setSelectedFloor(filterdValues);
    } else {
      props.setSelectedFloor([...props.selectedFloor, data]);
    }
  };

  return (
    <div style={{ position: "relative" }} ref={props.modalclose}>
      <div className="filter-popup">
        <div className="filter-types">
          {filterCardsData.map((data) => (
            <CommonSmallCard
              width={"70px"}
              background={data.background}
              text={data.text}
              name={data.name}
              icon={data.icon}
              onClick={() => selectedFilterArray(data.name)}
              selectedFilter={props.selectedFilter}
              isFilterPopUpActive={props.isFilterPopUpActive}
            />
          ))}
        </div>
        <div className="floors-container">
          <div className="floor-text">Floors</div>
          <div className="floor-counts">
            {floors.map((data) => (
              <span
                onClick={() => selectedFloorHandler(data)}
                className={`${
                  props.selectedFloor.includes(data) ? "" : "bg-active"
                }`}
              >
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-design"></div>
    </div>
  );
};

export default FilterPopUp;
