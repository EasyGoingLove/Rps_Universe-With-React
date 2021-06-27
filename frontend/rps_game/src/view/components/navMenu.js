import React from 'react';

import './navMenu.css';

const navMenu = () =>{

    return(
        <nav role="navigation">
            <div id="menuToggle">
            
                <input type="checkbox" />
                
            
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <a href="/"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    );


};
export default navMenu;