import React from "react";
import LoginPage from "../pages/login";
import PrivateRoute from "../components/privateRoute"
import Main from "../pages/main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function Router() {
  return (
    <BrowserRouter >
      <Routes >
        <Route exact path="/" element={<Navigate to={'/login'} />}></Route>
        <Route exact path="login" element={<LoginPage/>}></Route>
        <PrivateRoute exact path="main" component={Main} redirectTo={'/login'}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
