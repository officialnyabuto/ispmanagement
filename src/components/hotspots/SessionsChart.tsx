import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '06:00', users: 25 },
  { time: '08:00', users: 45 },
  { time: '10:00', users: 65 },
  { time: '12:00', users: 85 },
  { time: '14:00', users: 95 },
  { time: '16:00', users: 75 },
  { time: '18:00', users: 55 },
  { time: '20:00', users: 35 },
];

export default function SessionsChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily User Sessions</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="users" 
              fill="#818cf8"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}