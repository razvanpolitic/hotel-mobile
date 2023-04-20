import React, { useEffect, useMemo, useRef, useState } from "react";
import "./navbar.css";
import burger_icon from "../../assets/images/navbar/burger_icon.svg";
import search_icon from "../../assets/images/navbar/search_icon.svg";
import close_icon from "../../assets/images/navbar/close_icon.svg";
import sidebar_logo from "../../assets/images/navbar/sidebar_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeClassName, setActiveClassName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useMemo(() => {
    setActiveClassName(location.pathname);
  },[location])

  const inputField = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the searchbar is open and the clicked target is not within the menu,
      // then close the menu
      if (isSearchBarOpen && inputField.current && !inputField.current.contains(e.target)) {
        setIsSearchBarOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isSearchBarOpen])

  return (
    <>
      {!isSidebarOpen ? 
        <div className="navbar-container">
          <div onClick={() => setIsSidebarOpen(true)}><img src={burger_icon} alt="menu"/></div>
          <div className="center-logo">
              <div className="change--text">{props?.head1}</div>
              <div className="inhouse--text">{props?.head2}</div>
          </div>
          <div>
            {isSearchBarOpen ? 
              <div className="search-bar" ref={inputField}>
                <div className="search-bar-section">
                  <input placeholder="#room no." type="number" onChange={(e) => props.setSearchValue(e.target.value)}/>
                  <img src={search_icon} alt="search" onClick={() => setIsSearchBarOpen(false)}/>
                </div>
                <div className="blank_space"></div>
              </div>
              :
              <img src={search_icon} alt="search" onClick={() => setIsSearchBarOpen(true)}/>
            }
          </div>
        </div>
        :
        <>
          <div className="navbar-container">
            <div onClick={() => setIsSidebarOpen(true)}><img src={burger_icon} alt="menu"/></div>
            <div className="center-logo">
                <div className="change--text">{props?.head1}</div>
                <div className="inhouse--text">{props?.head2}</div>
            </div>
            <div>
              {isSearchBarOpen ? 
                <div className="search-bar">
                  <div className="search-bar-section">
                    <input placeholder="#room no."/>
                    <img src={search_icon} alt="search" onClick={() => setIsSearchBarOpen(false)}/>
                  </div>
                  <div className="blank_space"></div>
                </div>
                :
                <img src={search_icon} alt="search" onClick={() => setIsSearchBarOpen(true)}/>
              }
            </div>
          </div>
          <div className="sidebar-container">
            <div>
              <div onClick={() => setIsSidebarOpen(false)} className="close_icon"><img src={close_icon} alt="menu"/></div>
              <div className="welcome--text">
                Welcome, <br/>
                <span>WAA_Martin</span>
              </div>
              <div className="pages">
                <ul>
                  <li className={`${activeClassName === "/inhouse" ? "active-class" : ""}`} onClick={() => navigate("/inhouse")}>Inhouse Guests</li>
                  <li className={`${activeClassName === "/housekeeping" ? "active-class" : ""}`} onClick={() => navigate("/housekeeping")}>Housekeeping</li>
                  <li className={`${activeClassName === "/maintainance" ? "active-class" : ""}`} onClick={() => navigate("/maintainance")}>Maintenance</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="logout-container">
                <ul>
                  <li>Change property</li>
                  <li onClick={() => {navigate("/"); localStorage.removeItem("authData")}}>Log out</li>
                </ul>
              </div>
              <div className="sidebar-logo">
                <img src={sidebar_logo} alt="logo" />
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Navbar