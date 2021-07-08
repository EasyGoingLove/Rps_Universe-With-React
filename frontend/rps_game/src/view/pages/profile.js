import React from 'react';
import { useState } from "react";
import getUserDate from '../../auth/getUserData';
import BeginBtn from '../components/beginBtn';
import axios from "axios";
import './profile.css'

const Profile = ()=>{
        const [name,setName] = useState();

        const userinf =  getUserDate();
        userinf.then((results =>{
            console.log(results);
            setName(results.name);
        }));

        const logOut = ()=>{
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
            window.location.reload()
        };
        

    return(
        <div className="info-container">
            <div className="statistics">
            <h1 className="user-name">Challenger:<strong>{name}</strong></h1>
            <h1 className="user-name">Arcade Win Ratio:<br/><strong>867</strong></h1>
            <h1 className="user-name">Story Mode Progress<br/><strong>867</strong></h1>
            </div>
            <BeginBtn handleClick={logOut} label="Log out"/>
        </div>
    );
};
export default Profile;