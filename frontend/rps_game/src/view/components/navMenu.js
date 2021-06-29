import React from 'react';
import { useState } from 'react';
import userAuth from '../../auth/userAuth.js';
import authNav from '../../auth/authNav.js';

import './navMenu.css';

const NavMenu = () =>{

    

    return(
        <nav role="navigation">
            <div id="menuToggle">
            
                <input type="checkbox" />
                
            
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <a href="/"><li>Home</li></a>
                {authNav()}
                <a href="/arcadeRPS"><li>Arcade</li></a>
                <a href="#"><li>About</li></a>
                </ul>
            </div>
        </nav>
    );


};
export default NavMenu;