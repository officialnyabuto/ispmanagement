import React from 'react';
import { Activity, Server, Network as NetworkIcon, Bell } from 'lucide-react';
import StatCard from '../components/StatCard';
import NetworkMonitor from '../components/network/NetworkMonitor';
import IPAssignment from '../components/network/IPAssignment';
import TunnelManager from '../components/network/TunnelManager';
import AlertsList from '../components/network/AlertsList';

export default function Network() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Network Management</h1>
        <p className="text-gray-500">Monitor and manage your network infrastructure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Network Uptime"
          value="99.9%"
          trend={0.5}
          icon={Activity}
          color="bg-green-500"
        />
        <StatCard
          title="Active IPs"
          value="1,234"
          trend={12}
          icon={NetworkIcon}
          color="bg-blue-500"
        />
        <StatCard
          title="Active Tunnels"
          value="45"
          trend={8}
          icon={Server}
          color="bg-purple-500"
        />
        <StatCard
          title="Active Alerts"
          value="3"
          trend={-2}
          icon={Bell}
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <NetworkMonitor />
        <AlertsList />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IPAssignment />
        <TunnelManager />
      </div>
    </div>
  );
}