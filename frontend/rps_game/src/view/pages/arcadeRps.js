import React from "react";
import { useState } from "react";


import axios from "axios";
import userAuth from '../../auth/userAuth.js';
import rock from "../../images/rock.svg";
import sciccors from "../../images/sciccors.svg";
import paper from "../../images/paper.svg";
import "./arcadeRps.css";

let computer = {};

const ArcadeRPS = (props) => {
  const url = "http://localhost:5000/arcadeRPS";
  let picked_image = "";

  const styledCondition = ["gold-style","red-style","green-style"];
  const count_names = ["Rock","Paper","Scissors","GO"];
  
  const [humean_score,setHumanSc] = useState(0);
  const [computer_score,setComputerSc] = useState(0);
   

  
  const [currStyle,setStyle] = useState();
  const [image, setimage] = useState(picked_image);
  
  const [count,setCount] = useState();
  const [rps_switch,setSwitch] = useState();
  

  const [rps_options, setOptions] = useState(
   <div className="rps-container">
   <h2 className="pick-txt">Pick an Option</h2>
   <img
     className="rock"
     src={rock}
     onClick={() => ImageClick(rock, "rock",0)}
     alt="rock"
   />
   <img
     className="sciccors"
     src={sciccors}
     onClick={() => ImageClick(sciccors, "sciccors",2)}
     alt="sciccors"
   />
   <img
     className="paper"
     src={paper}
     onClick={() => ImageClick(paper, "paper",1)}
     alt="paper"
   />
 </div>
);

 



  const ImageClick = (img, picked,value) => {
    setimage(
      (picked_image = <img className="picked-option" value3={document.cookie.replace(/(^\d+)(.+$)/i,'$1')} value2={userAuth()} src={img} alt={picked} value={value} />)
    );
    setOptions("");

    sendGetRequest(url, picked_image);
    console.log(userAuth());

    setCount(count_names[0]);
    let timesRun = 0;
    let interval = setInterval(() => {
    timesRun++;
    setCount(count_names[timesRun])
      if(timesRun === 3){
         clearInterval(interval);
      }
   }, 1000);
   
   const rps_spin = [rock,paper,sciccors];

      let startTime = new Date().getTime();
      let interval2 = setInterval(() => {
         let i = Math.floor(Math.random() * 3) ;
         setSwitch(<img className="computer-option" src={rps_spin[i]} alt="rotated"/>);
         if(new Date().getTime() - startTime > 3500){
            clearInterval(interval2);
            if(computer.option=="rock"){
               setSwitch(<img className="computer-option" src={rock} alt="rotated"/>);
            }
            else if (computer.option=="paper"){
               setSwitch(<img className="computer-option" src={paper} alt="rotated"/>);
            }
            else{
               setSwitch(<img className="computer-option" src={sciccors} alt="rotated"/>);
            } 
            document.getElementById('myModal').style.display = "block";
            if(computer.condition=="You Win"){
               setHumanSc(humean_score+1);
               setStyle(styledCondition[2]);
            }
            else if(computer.condition=="You Lose"){
               setComputerSc(computer_score+1);
               setStyle(styledCondition[1]);
            }
            else{
               setStyle(styledCondition[0]);
            }
            
         }
      }, 100);

  }
  const reset = ()=>{
   document.getElementById('myModal').style.display = "none";
   setimage();
   setCount();
   setSwitch();
   setOptions(
      <div className="rps-container">
      <h2 className="pick-txt">Pick an Option</h2>
      <img
        className="rock"
        src={rock}
        onClick={() => ImageClick(rock, "rock",0)}
        alt="rock"
      />
      <img
        className="sciccors"
        src={sciccors}
        onClick={() => ImageClick(sciccors, "sciccors",2)}
        alt="sciccors"
      />
      <img
        className="paper"
        src={paper}
        onClick={() => ImageClick(paper, "paper",1)}
        alt="paper"
      />
    </div>
   );
   

  };


    return (
      <div>
         <div id="myModal" className="modal">
             <div className="modal-content">
               <h1 className={currStyle}>{computer.condition}</h1> <br/>
               
               
                  <button className="glow-on-hover" onClick={reset}>Again ?</button>
               
            </div>
         </div>

        <h1 className="score">Score</h1>
        <h1 className="points">{humean_score} : {computer_score}</h1>

        <div className="counter">
        <h1 className="counter-txt">{count}</h1>
        </div>

        <div className="arena">{image}{rps_switch}</div>
        <div className="options-container">
         {rps_options}
        </div>
        
      </div>
    );
};


export default ArcadeRPS;




//Connect to server 
const sendGetRequest = async (url, picked_image) => {
   try {
     const resp = await axios.post(url, picked_image);
     console.log(resp.data);
     computer =resp.data;
   } catch (err) {
     console.error(err);
   }
 };
