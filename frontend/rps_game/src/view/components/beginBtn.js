import React from 'react';
import './beginBtn.css';

const beginBtn = (props)=>{
    
    return(
        <div>
            <center>
            <button className="beggin-btn" onClick={props.handleClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             {props.label}
            </button>
            </center>
        </div>
    );

};
export default beginBtn;