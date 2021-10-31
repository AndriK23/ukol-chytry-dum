import React from 'react';
import Light from './../Light';
import './style.css';


const Lights = ({lights}) => {
    return (
        <div className="lights">
        {lights.map(pokoj => <Light name={pokoj.name} state={pokoj.state} key={pokoj.name}/>)}
        </div>
    )
}

export default Lights;