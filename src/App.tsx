import React, { lazy, Suspense } from 'react';
import { Users, Wifi, Activity, CreditCard } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import NetworkStatus from './components/NetworkStatus';
import ActiveCustomers from './components/ActiveCustomers';

// Lazy load pages
const PPPoE = lazy(() => import('./pages/PPPoE'));
const Hotspots = lazy(() => import('./pages/Hotspots'));
const Network = lazy(() => import('./pages/Network'));
const Billing = lazy(() => import('./pages/Billing'));

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    const loadingFallback = (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );

    switch (currentPage) {
      case 'pppoe':
        return (
          <Suspense fallback={loadingFallback}>
            <PPPoE />
          </Suspense>
        );
      case 'hotspots':
        return (
          <Suspense fallback={loadingFallback}>
            <Hotspots />
          </Suspense>
        );
      case 'network':
        return (
          <Suspense fallback={loadingFallback}>
            <Network />
          </Suspense>
        );
      case 'billing':
        return (
          <Suspense fallback={loadingFallback}>
            <Billing />
          </Suspense>
        );
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
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 p-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;