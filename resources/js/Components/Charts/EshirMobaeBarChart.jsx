import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Rectangle, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { month: 'Jan', Tithes: 4000, Offerings: 2400 },
  { month: 'Feb', Tithes: 3000, Offerings: 1398 },
  { month: 'Mar', Tithes: 2000, Offerings: 9800 },
  { month: 'Apr', Tithes: 2780, Offerings: 3908 },
  { month: 'May', Tithes: 1890, Offerings: 4800 },
  { month: 'Jun', Tithes: 2390, Offerings: 3800 },
  { month: 'Jul', Tithes: 3490, Offerings: 4300 },
  { month: 'Aug', Tithes: 4000, Offerings: 2400 },
  { month: 'Sep', Tithes: 3000, Offerings: 1398 },
  { month: 'Oct', Tithes: 2000, Offerings: 9800 },
  { month: 'Nov', Tithes: 2780, Offerings: 3908 },
  { month: 'Dec', Tithes: 1890, Offerings: 4800 },
];

const EshirMobaeBarChart = () => (
  <ResponsiveContainer width="100%" height={500}>
    <BarChart
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Tithes" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="Offerings" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  </ResponsiveContainer>
);

export default EshirMobaeBarChart;
