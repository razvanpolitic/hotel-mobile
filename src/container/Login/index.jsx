import React, { useState } from "react";
import "./login.css";
import app_logo from "../../assets/images/login/app_logo.svg";
import building_outline_icon from "../../assets/images/login/building_outline_icon.svg";
import person_icon from "../../assets/images/login/person_icon.svg";
import lock_icon from "../../assets/images/login/lock_icon.svg";
import { useNavigate } from "react-router-dom";
import company_logo from "../../assets/images/login/company_logo.svg";
import sidebar_logo from "../../assets/images/navbar/sidebar_logo.svg";
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();
    if (authData?.username === "WAA_test" && authData?.password === "test") {
      localStorage.setItem("authData", JSON.stringify(authData));
      props.setIsLogin(true);
      navigate("/inhouse");
      toast("Login successful");
    }else{
      toast("Please check username & password");
    }
  }

  const dropDownData = [
    {
      icon: company_logo,
      name: "PHO",
    },
    {
      icon: company_logo,
      name: "NYH",
    },
    {
      icon: company_logo,
      name: "STR",
    },
    {
      icon: company_logo,
      name: "IMP",
    },
    {
      icon: company_logo,
      name: "SQU",
    },
    {
      icon: company_logo,
      name: "TIV",
    },
    {
      icon: sidebar_logo,
      name: "WAA",
    },
    {
      icon: company_logo,
      name: "SPA",
    },
  ]

  return (
    <div>
      <ToastContainer position="top-center" theme="light" autoClose="3000"/>
      <div className="login-logo-with-bg">
        <div className="darken-background">
          <img src={app_logo} alt="ARP-HANSEN-HOTEL-GROUP" />
        </div>
      </div>
      <div>
        <div className="select-property-title" onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          <div className="property-btn">
            <img src={selectedProperty === "WAA" ? sidebar_logo : building_outline_icon} alt="property"/>
            <div>{selectedProperty === "WAA" ? "WAA" : "Select property"}</div>
          </div>
          {isDropDownOpen &&
            <div className="dropdown-container">
              {dropDownData?.map((data)=>(
                <div className={`${selectedProperty === "WAA" && data?.name === "WAA" ? "dropdown-single-active" : ""} dropdown-single`} onClick={() => {data?.name === "WAA" && setIsDropDownOpen(!isDropDownOpen); data?.name === "WAA" && setSelectedProperty('WAA')}}>
                  <img src={data?.icon} alt="icon"/>
                  <div>{data?.name}</div>
                </div>
              ))}
            </div>
          }
        </div>
        <form className="form-container">
          <div className="form-input-container">
            <div className="input-container">
              <img src={person_icon} alt="person"/>
              <input type="text" placeholder="Username" onChange={(e) => setAuthData({...authData, username: e.target.value})} />
            </div>
            <div className="input-container">
              <img src={lock_icon} alt="lock"/>
              <input type="password" placeholder="Password" className="password-input" onChange={(e) => setAuthData({...authData, password: e.target.value})}/>
            </div>
          </div>
          <div className="form-remember-container">
            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
          </div>
          <button className="submit-btn" onClick={(e) => onLoginHandler(e)}>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;