import React from "react";
import { Route, Routes } from "react-router-dom";
import InhouseView from "../container/Inhouse_view";
import HouseKeeping from "../container/housekeeping";
import Maintainance from "../container/maintainance";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = (props) => {
  return (
    <>
      <ProtectedRoute isLogin={props.isLogin}>
        <Routes>
          <Route path="/inhouse" element={<InhouseView setIsLogin={props.setIsLogin} data={props.data} setData={props.setData}/>} />
          <Route path="/housekeeping" element={<HouseKeeping setIsLogin={props.setIsLogin} data={props.data} setData={props.setData}/>} />
          <Route path="/maintainance" element={<Maintainance setIsLogin={props.setIsLogin} data={props.data} setData={props.setData}/>} />
        </Routes>
      </ProtectedRoute>
    </>
  );
};

export default AppRoutes;
