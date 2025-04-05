import React from 'react'
import { RadialBarChart, RadialBar, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { COLORS } from '../utils';

const RadialEnergyChart = ({ data }) => {
    return (
        <div className="radial-container">
            <h2 className="radial-title">Distribución de Energía (Radial)</h2>
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="20%"
                    outerRadius="90%"
                    barSize={15}
                    data={data}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="perc"
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-radial-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </RadialBar>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#333',
                            borderRadius: '2px',
                            border: 'none',
                            padding: '5px',
                            color: 'white'
                        }}
                        itemStyle={{
                            color: 'white'
                        }}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadialEnergyChart