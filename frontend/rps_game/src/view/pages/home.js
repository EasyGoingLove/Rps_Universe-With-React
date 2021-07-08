import React from 'react';


import BeginBtn from '../components/beginBtn';

import './home.css';
import './home.scss'



const homePage = () =>{
    let log;
    if(document.cookie){
        log = "http://localhost:3000/storyModeRps";
    }
    else{
      log= "http://localhost:3000/storyRPS";
    }
    const toArcade = ()=>{
        window.location.replace("http://localhost:3000/arcadeRPS");
    };
    const toStory = ()=>{
        window.location.replace(log);
    };


    return (
        
        <div className="container">
            <div className="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            </div>
        <h1 className="neonText">
            THE UNIVERSE
        </h1>
        <h1 className="neonText">
            OF
        </h1>
        <h1 className="neonText">
        Rock Paper Scissors
        </h1>

         <BeginBtn handleClick={toStory} label="Start your journey"/>
         <BeginBtn handleClick={toArcade} to="/arcadeRPS" label="Just Play"/>

        </div>

    );
};
export default homePage;