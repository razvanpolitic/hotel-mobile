import React, { useEffect, useMemo, useRef, useState } from "react";
import "./inhouseview.css";
import Navbar from "../../components/navbar/Navbar";
import RoomCard from "../../components/common/RoomCard";
import filter_icon from "../../assets/images/inhouse_view/filter_icon.svg";
import sort_icon from "../../assets/images/inhouse_view/sort_icon.svg";
import FilterPopUp from "../../components/common/FilterPopUp";
import {
  getBackgroundColorFromStatus,
  getIconFromStatus,
} from "../../constant/constant";

const InhouseView = (props) => {
  const [isFilterPopUpActive, setIsFilterPopUpActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [isSort, setIsSort] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([
    "dirty",
    "clean",
    "pickup",
    "inspected",
    "DND",
    "OOO",
    "OOS",
  ]);
  const [selectedFloor, setSelectedFloor] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedStatusAndId, setSelectedStatusAndId] = useState({
    id: "",
    housekeepingStatus: "",
    comment: "",
  });

  const searchData = useMemo(() => {
    let filteredData = props.data?.rooms?.filter((f) => f.status !== "vacant");

    if (searchValue && searchValue !== "" && searchValue.length >= 3) {
      filteredData = filteredData.filter(
        (f) => f.id === String(searchValue) && f.status !== "vacant"
      );
    }

    if (selectedFilter) {
      filteredData = filteredData.filter((elem) => {
        return selectedFilter?.some((ele) => {
          return ele === elem.housekeepingStatus;
        });
      });
    }

    if (isSort) {
      filteredData.sort((a, b) => b.id - a.id);
    }

    if (selectedFloor && selectedFloor.length) {
      filteredData = filteredData.filter((elem) => {
        return selectedFloor?.some((ele) => {
          return ele === Number(elem.id.charAt(0));
        });
      });
    }

    return filteredData;
  }, [searchValue, isSort, selectedFilter, selectedFloor, props.data?.rooms]);

  const modalclose = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the searchbar is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isFilterPopUpActive &&
        modalclose.current &&
        !modalclose.current.contains(e.target)
      ) {
        setIsFilterPopUpActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isFilterPopUpActive]);

  searchData?.map(function (obj) {
    obj.id === selectedStatusAndId?.id &&
      (obj.housekeepingStatus = selectedStatusAndId?.housekeepingStatus);
  });

  return (
    <div className="inhouse-container">
      <Navbar
        head1="Charge It"
        head2="Inhouse Guests"
        setSearchValue={setSearchValue}
        setIsLogin={props.setIsLogin}
      />
      <div className="room-cards-container">
        {searchData &&
          searchData?.map((room) => (
            <RoomCard
              data={props.data}
              backgroundColor={getBackgroundColorFromStatus(
                room?.housekeepingStatus
              )}
              icon={getIconFromStatus(room?.housekeepingStatus)}
              room_no={room?.id}
              customer_name={room?.name}
              customer_count={room?.persons}
              checkin_date={room?.checkIn}
              checkout_date={room?.checkOut}
              setSelectedRoomId={setSelectedRoomId}
              onCardClick={() => setSelectedRoomId(room.id)}
              selectedRoomId={selectedRoomId}
              setSelectedStatusAndId={setSelectedStatusAndId}
            />
          ))}
      </div>
      <div className="filter-sort-container">
        <img
          src={filter_icon}
          alt="filter"
          onClick={() => setIsFilterPopUpActive(!isFilterPopUpActive)}
        />
        <img src={sort_icon} alt="sort" onClick={() => setIsSort(!isSort)} />
      </div>
      {isFilterPopUpActive && (
        <FilterPopUp
          isFilterPopUpActive={isFilterPopUpActive}
          modalclose={modalclose}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          selectedFloor={selectedFloor}
          setSelectedFloor={setSelectedFloor}
        />
      )}
    </div>
  );
};

export default InhouseView;
