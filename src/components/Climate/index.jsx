import React, { useState } from 'react';
import temp from './../images/temp.svg';
import './style.css';

const Climate = ({climate}) => {

	const [temperature, setTemperature] = useState(climate.temperature);

	const handleClickPlus = () => {
		setTemperature(temperature + 1);

	}

	const handleClickMinus = () => {
		setTemperature(temperature - 1);

	}

    return (
        <>	
        <div className="climate">
				<div className="climate__icon">
					<img src={temp}
                    alt="teplota" />
				</div>
				<div className="climate__content">
					<div className="climate__temperature"> 	{temperature}&deg;C </div>
					<div className="climate__humidity">Vlhost vzduchu {climate.humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
                <button className = "button" onClick ={handleClickPlus} > + </button>
                <button className = "button" onClick ={handleClickMinus} > - </button>
				</div>
			</div>
        </>
    )
}


export default Climate;
