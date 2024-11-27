import React from 'react';
import {
  LayoutDashboard,
  Users,
  Wifi,
  Network,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'pppoe', icon: Users, label: 'PPPoE Customers' },
  { id: 'hotspots', icon: Wifi, label: 'Hotspots' },
  { id: 'network', icon: Network, label: 'Network' },
  { id: 'billing', icon: CreditCard, label: 'Billing' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  return (
    <aside className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">ISP Manager</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                  ${currentPage === item.id 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}