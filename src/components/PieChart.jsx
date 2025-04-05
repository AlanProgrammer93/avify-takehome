import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { COLORS } from '../utils'

const PieChartComponent = ({ data }) => {
    return (
        <div className="chart-container">
            <h2 className="chart-title">Distribución de Energía (Pie)</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="perc"
                        nameKey="fuel"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-pie-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
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
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartComponent
