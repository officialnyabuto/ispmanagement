import React from 'react';
import { Users, Wifi, Activity, CreditCard } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import NetworkStatus from './components/NetworkStatus';
import ActiveCustomers from './components/ActiveCustomers';
import PPPoE from './pages/PPPoE';

function App() {
  // For demo purposes, showing PPPoE page
  const currentPage = 'pppoe';

  const renderPage = () => {
    switch (currentPage) {
      case 'pppoe':
        return <PPPoE />;
      default:
        return (
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-500">Welcome back, Admin</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Customers"
                value="2,543"
                trend={12}
                icon={Users}
                color="bg-indigo-500"
              />
              <StatCard
                title="Active Hotspots"
                value="156"
                trend={8}
                icon={Wifi}
                color="bg-green-500"
              />
              <StatCard
                title="Network Uptime"
                value="99.9%"
                icon={Activity}
                color="bg-blue-500"
              />
              <StatCard
                title="Monthly Revenue"
                value="$45,231"
                trend={15}
                icon={CreditCard}
                color="bg-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <NetworkStatus />
              <ActiveCustomers />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;