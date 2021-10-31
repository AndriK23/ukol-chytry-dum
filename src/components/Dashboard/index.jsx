import React from 'react';
import Lights from './../Lights';
import Climate from './../Climate';
import Blinds from './../Blinds';
import Energy from './../Energy';
import './style.css';

const Dashboard = ({data}) => {
    return (
        <>
            <main className="dashboard">
            < Lights lights = {data.lights}/>
            < Climate climate = {data.climate} />
            < Blinds blindsState = {data.blinds}/>
            < Energy energyConsumption = {data.energyConsumption}/>
            </main>
         </>
    )
}


export default Dashboard;

