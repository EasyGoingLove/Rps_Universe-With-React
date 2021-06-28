import React from "react";
import { useState } from "react";

import './errorMsg.css';

const errorMsg = props =>{

    return(
        <div className="alert">
        <center><strong className="error-style">{props.msg}</strong></center>
        </div>
    );
};
export default errorMsg;