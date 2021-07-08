import React from "react";
import { useState } from "react";

import Register from "../components/register";
import BeginBtn from '../components/beginBtn';
import "./storyTeller.css";


const StoryTeller = () => {
  const story = [
    "Long ago the three nations lived in peace ,",
    "but all of that changed when the otherworldly invaders attacked.",
    "They could manipulate all three elements 'Rock' 'Paper' and 'Scissors'.",
    "Playing 'Paper' on the Rock Nation or playing 'Rock' on the Scissors Nation hence",
    "they broke the fragile balance that there once was .",
    "There was only one person who could save them 'YOU' but 10 years ago 'YOU' dissapeared.",
    "Now 10 years later 'YOU' have appeared again.",

    "Will you help the nations and bring peace to the once peacefull world?",
  ];
  const renderRegister = ()=>{
    setIntro( <Register/>);
   
 };

  const [intro,setIntro] = useState(
     <div>
      <h3 id="continue-btn" className="story-txt">{story[0]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[1]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[2]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[3]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[4]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[5]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[6]}</h3>
      <h3 id="continue-btn" className="story-txt">{story[7]}</h3>
      <BeginBtn handleClick={renderRegister} id="s" label="Yes"/>
    </div>);

  
  return (
    <div>{intro}</div>
   
  );
};
export default StoryTeller;
