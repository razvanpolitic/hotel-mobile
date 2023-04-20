import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AppRoutes from './routes';
import Login from './container/Login';
import jsonData from './constant/data.json';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState(jsonData);
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  },[data])

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsLogin={setIsLogin}/>} />
          <Route path="*" element={<AppRoutes isLogin={isLogin} setIsLogin={setIsLogin} data={data} setData={setData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
