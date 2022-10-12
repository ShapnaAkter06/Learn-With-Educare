import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    // console.log(totalChart);
    return (
        <div className='bg-white flex items-center justify-center'>
        <LineChart width={350} height={400} data={data.data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
        </div>
    );
};

export default Statistics;