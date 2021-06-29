import React from "react";

const authNav = () =>{

    if(document.cookie){
     return <a href="/profileRps"><li>Profile</li></a>;
    }else{return <a href="/loginRps"><li>Login</li></a>;}
   }

export default authNav;