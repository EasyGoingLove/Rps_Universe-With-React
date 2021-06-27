import React from "react";

import './register.css';


const register = () =>{
 const url ="http://localhost:5000/auth/rps_register";

    const nestedFetch = async()=>{
        await fetch(url).then(res => {
            res.json().then((data) => {console.log(data.message)});
            //'mssg'
            res.text().then((data) => { let data1 = JSON.parse(data); console.log(data1.message);});
            //'mssg'
     });
    };

    return(
        <div className="login-box">
        <h2>Register</h2>
        <form action={url} method="POST" onSubmit={nestedFetch}>
          <div className="user-box">
            <input type="text" name="name"/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="pass"/>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="rep_pass"/>
            <label>Repeat Password</label>
          </div>
          <button type="submit" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </button>
        </form>
      </div> 
  
    );
};

export default register;