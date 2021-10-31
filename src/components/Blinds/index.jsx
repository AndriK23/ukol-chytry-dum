import React, { useState } from 'react';
import './style.css';
import blindOpen from './../images/blinds-open.svg';
import blindClosed from './../images/blinds-closed.svg';

const Blinds = ({blindsState}) => {
    const [stav, setState] = useState(blindsState);
    return (
        <>
        <div className="blinds">
				<div className="blinds__icon">
					<img src={stav ? blindOpen : blindClosed}
                    alt = "blinds"/>
		        </div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={stav ? "button button--active" : "button"} onClick = {() => setState(!stav)}>Otevřeno</button>
					<button className={stav ? "button" : "button button--active" } onClick = {() => setState(!stav)}>Zavřeno</button>
				</div>
		</div>
       </>
    )
}


export default Blinds;