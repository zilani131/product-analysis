import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data,setData]=useState([])
        useEffect(()=>{
         fetch('data.json')
         .then(res=>res.json())
         .then(data=>setData(data))
    },[])
   
    return (
        <div className=' mx-8 grid grid-cols-1 gap-8 md:grid-cols-2'> 
            <div>
                <h1 className='text-center mb-4 text-3xl font-semibold text-blue-700'>Month wise sell</h1>
               <div  className=' border-2 border-slate-400'  style={{ width: '100%', height: 300 }}>
               <ResponsiveContainer>
                <LineChart  data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    
                </LineChart>
                </ResponsiveContainer>
              
               </div>
            </div>
            <div>
                <h1 className='text-center mb-4 text-3xl font-semibold text-blue-700'>Investment vs Revenue</h1>
                <div  className=' px-4 border-2 border-slate-400'  style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <AreaChart  data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                 </defs>
               <XAxis dataKey="month" />
               <YAxis />
               <CartesianGrid strokeDasharray="3 3" />
               <Tooltip />
               <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
               <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                 </AreaChart>
                </ResponsiveContainer>
                </div>
                
               
            </div>
            <div>
            <h1 className='text-center text-3xl mb-4 font-semibold text-blue-700'>Investment vs Revenue</h1>
            <div  className=' px-4 border-2 border-slate-400'  style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
                </ResponsiveContainer>
            </div>
            </div>
            <div>
            <h1 className='text-center text-3xl mb-4 font-semibold text-blue-700'>Investment vs Revenue</h1>
            <div className=' border-2 border-slate-400' style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <PieChart>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
               </PieChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;