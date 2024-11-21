import React from 'react';
import { MoreHorizontal, Signal, SignalLow, SignalMedium, SignalHigh } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const hotspots = [
  {
    id: 1,
    name: 'Mall Plaza Hotspot',
    location: 'Shopping Mall, Floor 2',
    status: 'Active',
    signal: 'high',
    connectedUsers: 45,
    dailyTraffic: '125GB',
    revenue: '$156',
  },
  {
    id: 2,
    name: 'Central Station WiFi',
    location: 'Train Station Main Hall',
    status: 'Active',
    signal: 'medium',
    connectedUsers: 78,
    dailyTraffic: '256GB',
    revenue: '$234',
  },
  {
    id: 3,
    name: 'City Park Network',
    location: 'Public Park Area',
    status: 'Maintenance',
    signal: 'low',
    connectedUsers: 0,
    dailyTraffic: '0GB',
    revenue: '$0',
  },
];

const SignalIcon = ({ strength }: { strength: string }) => {
  switch (strength) {
    case 'high':
      return <SignalHigh className="w-4 h-4 text-green-500" />;
    case 'medium':
      return <SignalMedium className="w-4 h-4 text-yellow-500" />;
    case 'low':
      return <SignalLow className="w-4 h-4 text-red-500" />;
    default:
      return <Signal className="w-4 h-4 text-gray-500" />;
  }
};

export default function HotspotList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hotspot
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status & Signal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QR Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hotspots.map((hotspot) => (
              <tr key={hotspot.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{hotspot.name}</div>
                  <div className="text-sm text-gray-500">{hotspot.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <SignalIcon strength={hotspot.signal} />
                    <span className={`ml-2 text-sm ${
                      hotspot.status === 'Active' ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {hotspot.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {hotspot.connectedUsers} users
                  </div>
                  <div className="text-sm text-gray-500">
                    {hotspot.dailyTraffic} / {hotspot.revenue}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <QRCodeSVG
                    value={`http://wifi.connect/${hotspot.id}`}
                    size={64}
                    level="L"
                    className="border p-1 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}