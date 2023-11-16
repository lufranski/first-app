import React from "react";

import reactLogo from "../images/react-icon.png";

export default function Navbar(){
    return(
        <nav>
            <div className="logoFlex">
                <img src={reactLogo} alt="react logo" className="logo" />
                <h3 className="logoTxt">ReactFacts</h3>
            </div>

            <h4>React Course - Project 1</h4>
        </nav>
    )
}