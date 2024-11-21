import React from 'react';
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', bandwidth: 65 },
  { time: '04:00', bandwidth: 45 },
  { time: '08:00', bandwidth: 78 },
  { time: '12:00', bandwidth: 88 },
  { time: '16:00', bandwidth: 95 },
  { time: '20:00', bandwidth: 70 },
  { time: '23:59', bandwidth: 60 },
];

export default function NetworkStatus() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Network Status</h3>
          <p className="text-sm text-gray-500">Real-time bandwidth usage</p>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium text-green-500">Healthy</span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="bandwidth" 
              stroke="#6366f1" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}