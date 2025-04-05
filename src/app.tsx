import React, { useState, useEffect } from 'react';
import PieChart from './PieChart';

const App = () => {
    const [energyGeneration, setEnergyGeneration] = useState([])
    
    useEffect(() => {
      fetch('https://api.carbonintensity.org.uk/generation')
        .then(response => response.json())
        .then(data => setEnergyGeneration(data.data.generationmix))
        .catch(err => console.log(err))
    }, [])
    
    console.log("data: ", energyGeneration);
    
    return (
        <div className='container'>
            <h1 className='test'>UK Energy Mix</h1>
            <PieChart data={energyGeneration} />
        </div>
    )
};

export {
    App
}