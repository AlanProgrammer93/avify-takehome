import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { COLORS } from './utils'

const PieChartComponent = ({data}) => {
    return (
        <div>
            <h2>Distribución de Energía (Pie Chart)</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="perc"
                    nameKey="fuel"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}

export default PieChartComponent
