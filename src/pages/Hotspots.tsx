import React, { useState } from 'react';
import { Plus, Signal, Users, Clock, BarChart3 } from 'lucide-react';
import HotspotList from '../components/hotspots/HotspotList';
import HotspotForm from '../components/hotspots/HotspotForm';
import StatCard from '../components/StatCard';
import SessionsChart from '../components/hotspots/SessionsChart';
import ActiveSessions from '../components/hotspots/ActiveSessions';

export default function Hotspots() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: any) => {
    console.log('New hotspot data:', data);
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hotspot Management</h1>
          <p className="text-gray-500">Monitor and manage your wireless hotspots</p>
        </div>
        <button className="btn" onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Hotspot
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Hotspots"
          value="24"
          trend={8}
          icon={Signal}
          color="bg-green-500"
        />
        <StatCard
          title="Connected Users"
          value="156"
          trend={12}
          icon={Users}
          color="bg-blue-500"
        />
        <StatCard
          title="Avg. Session Time"
          value="45m"
          icon={Clock}
          color="bg-purple-500"
        />
        <StatCard
          title="Daily Revenue"
          value="$342"
          trend={15}
          icon={BarChart3}
          color="bg-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SessionsChart />
        <ActiveSessions />
      </div>

      <HotspotList />

      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <HotspotForm onClose={() => setShowForm(false)} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}