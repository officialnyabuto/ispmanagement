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

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'PPPoE Customers' },
  { icon: Wifi, label: 'Hotspots' },
  { icon: Network, label: 'Network' },
  { icon: CreditCard, label: 'Billing' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">ISP Manager</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}