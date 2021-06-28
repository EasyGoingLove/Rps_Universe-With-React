import React from "react";
import { useState } from "react";

import './errorMsg.css';

const errorMsg = props =>{

    return(
        <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>{props.msg}</strong>
        </div>
    );
};
export default errorMsg;