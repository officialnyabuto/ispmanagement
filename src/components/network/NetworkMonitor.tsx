import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ArrowDown, ArrowUp } from 'lucide-react';

const data = [
  { time: '00:00', download: 850, upload: 420 },
  { time: '04:00', download: 620, upload: 380 },
  { time: '08:00', download: 1200, upload: 780 },
  { time: '12:00', download: 1800, upload: 920 },
  { time: '16:00', download: 2100, upload: 1100 },
  { time: '20:00', download: 1600, upload: 850 },
  { time: '23:59', download: 900, upload: 480 },
];

export default function NetworkMonitor() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Network Traffic</h3>
          <p className="text-sm text-gray-500">Real-time bandwidth monitoring</p>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium text-green-500">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <ArrowDown className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Download</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">1.8 Gbps</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <ArrowUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">Upload</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">920 Mbps</div>
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
              dataKey="download" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="upload" 
              stroke="#22c55e" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}