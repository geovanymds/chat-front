import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({component: Component, path, redirectTo}) {
  return (
    <>
      {!!localStorage.getItem("userToken") ? (
        <Route path={path} element={<Component/>}/>
      ) : (
        <Navigate to={redirectTo} />
      )}
    </>
  );
}

export default PrivateRoute;
