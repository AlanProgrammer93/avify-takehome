import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { COLORS } from '../utils';

const BarEnergyChart = ({ data }) => {
    return (
        <div className="chart-container">
            <h2 className="chart-title">Grafico de Barras</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fuel" />
                    <YAxis />
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
                    <Bar dataKey="perc">
                        {data.map((_, index) => (
                            <Cell key={`cell-bar-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarEnergyChart