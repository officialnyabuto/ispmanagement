import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-02-01', usage: 45 },
  { date: '2024-02-02', usage: 52 },
  { date: '2024-02-03', usage: 49 },
  { date: '2024-02-04', usage: 63 },
  { date: '2024-02-05', usage: 58 },
  { date: '2024-02-06', usage: 72 },
  { date: '2024-02-07', usage: 68 },
];

export default function UsageChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Trends</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="usage" 
              stroke="#6366f1" 
              fill="#818cf8" 
              fillOpacity={0.2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}