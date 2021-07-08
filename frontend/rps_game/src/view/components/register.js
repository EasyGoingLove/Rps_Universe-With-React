import React from "react";
import axios from "axios";

import ErrorMsg from "./errorMsg";
import "./register.css";

export default class Register extends React.Component {
  state = {
    name: "",
    pass: "",
    rep_pass: "",
    msg:""
  };

  handleClose = ()=>{
   document.getElementsByClassName('alert').style.display = "none";
  };
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangePass = (event) => {
    this.setState({ pass: event.target.value });
  };
  handleChangeRepPass = (event) => {
    this.setState({ rep_pass: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  

    const user = {
      name: this.state.name,
      pass: this.state.pass,
      rep_pass: this.state.rep_pass,
    };


    axios
      .post('http://localhost:5000/auth/rps_register', { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if(!res.data.message){
        this.setState({ msg: res.data.message });
        }else{
          console.log("ada")
          this.setState({ msg: "You Reagistration was Succsessfull!" });
        }
      })
      .catch((err)=>{
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login-box">
        <ErrorMsg msg={this.state.msg}/><br/>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" onChange={this.handleChangeName} />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="pass" onChange={this.handleChangePass} />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="rep_pass"
              onChange={this.handleChangeRepPass}
            />
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
  }
}
