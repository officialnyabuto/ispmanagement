import React from 'react';
import { Server, Power, ExternalLink } from 'lucide-react';

const tunnels = [
  { 
    id: 1, 
    name: 'Primary VPN',
    endpoint: '203.0.113.1',
    status: 'Connected',
    uptime: '15d 4h',
    bandwidth: '450 Mbps'
  },
  { 
    id: 2, 
    name: 'Backup VPN',
    endpoint: '203.0.113.2',
    status: 'Standby',
    uptime: '15d 4h',
    bandwidth: '0 Mbps'
  },
  { 
    id: 3, 
    name: 'Remote Office',
    endpoint: '203.0.113.3',
    status: 'Connected',
    uptime: '7d 12h',
    bandwidth: '120 Mbps'
  }
];

export default function TunnelManager() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Tunnel Management</h3>
            <p className="text-sm text-gray-500">Manage VPN and network tunnels</p>
          </div>
          <button className="btn">
            <Server className="w-4 h-4 mr-2" />
            New Tunnel
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {tunnels.map((tunnel) => (
          <div key={tunnel.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{tunnel.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-sm text-gray-500">{tunnel.endpoint}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{tunnel.bandwidth}</div>
                  <div className="text-sm text-gray-500">Uptime: {tunnel.uptime}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${tunnel.status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {tunnel.status}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Power className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}