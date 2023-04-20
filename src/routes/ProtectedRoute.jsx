import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isLogin }) => {
	let loginData = JSON.parse(localStorage.getItem('authData'));
	if (loginData?.username === "WAA_test" && loginData?.password === "test" || isLogin) {
		return children;
	}
	return <Navigate to="/" />;
};