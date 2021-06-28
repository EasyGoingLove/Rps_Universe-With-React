import React from 'react';

import axios from "axios";

import ErrorMsg from '../components/errorMsg';
import './login.css';

export default class Login extends React.Component {
    state = {
      name: "",
      pass: "",
      msg:""
    };
  
    handleChangeName = (event) => {
      this.setState({ name: event.target.value });
    };
    handleChangePass = (event) => {
      this.setState({ pass: event.target.value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      const user = {
        name: this.state.name,
        pass: this.state.pass,
      };
  
      axios
        .post(`http://localhost:5000/auth/rps_login`, { user })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if(!res.data.message){
          this.setState({ msg: res.data.message });
          }else{
            window.location.replace("http://localhost:3000/");
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
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input type="text" name="name" onChange={this.handleChangeName} />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="pass" onChange={this.handleChangePass} />
              <label>Password</label>
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