import React from "react";
import { Route, Redirect } from "react-router-dom";

import Profile from "../view/pages/profile";
import logedIn from "./userAuth";

 const ProtectedRoute = () => {

    if (logedIn()) {
        return <Profile/>;
      } else {
        return  <Redirect to="/"/>
     }
};
export default ProtectedRoute;
