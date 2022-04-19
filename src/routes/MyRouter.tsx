import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginComponent } from "../components/LoginComponent";
import { SignupComponent } from "../components/SignupComponent";
import { TopComponent } from "../components/TopComponent";
import { GetLoggedinUser } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

export const MyRouter = () => {
    
  return (
    <Routes>
      <Route index element={<LoginComponent />} />
      <Route path="/signup" element={<SignupComponent />} />
      <Route path="/statements" element={<PrivateRoute />}>
        <Route path="/statements" element={<TopComponent />} />
      </Route>
    </Routes>
  );
};
