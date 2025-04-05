import React, { useState, useEffect } from 'react';
import PieChart from './components/PieChart';
import BarEnergyChart from './components/BarEnergyChart';
import RadialEnergyChart from './components/RadialEnergyChart';

const App = () => {
    const [energyGeneration, setEnergyGeneration] = useState([])

    useEffect(() => {
        fetch('https://api.carbonintensity.org.uk/generation')
            .then(response => response.json())
            .then(data => setEnergyGeneration(data.data.generationmix))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard de Energía</h1>

            <div className="charts-grid">
                <PieChart data={energyGeneration} />
                <BarEnergyChart data={energyGeneration} />
            </div>

            <div className="radial-section">
                <RadialEnergyChart data={energyGeneration} />
            </div>
        </div>
    )
};

export {
    App
}