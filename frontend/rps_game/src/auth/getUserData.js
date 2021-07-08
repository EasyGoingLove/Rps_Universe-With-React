import React from 'react';
import axios from "axios";

const getUserDate = async()=>{
    let respose ='';
    const id = document.cookie.replace(/(^\d+)(.+$)/i,'$1'); 
    await axios.post('http://localhost:5000/userDataRps',{id:id})
    .then(function (response) {
      // handle success
      respose = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

     return respose;
};
export default getUserDate;