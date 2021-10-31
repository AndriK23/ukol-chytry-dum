import React, { useState } from 'react';
import './style.css';
import lightOff from './../images/light-off.svg';
import lightOn from './../images/light-on.svg';



const Light = ({name,state}) => {
    const [zapnuto, setState] = useState(state);
    return (
    <>
        <div className="light" onClick = { () => {setState(zapnuto === "on" ? "off" : "on")}}>
            <div className = "light__icon"> 
                <img 
                src = {zapnuto === "on" ? lightOn : lightOff}
                alt = {zapnuto ? "on": "off"} />
            </div>
            <div className="light__name">{name}</div>
        </div>  
    </>
    )
}


export default Light;

