import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Bell } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'error',
    message: 'High CPU usage detected on main server',
    timestamp: '2 minutes ago',
    details: 'CPU usage exceeded 90% threshold'
  },
  {
    id: 2,
    type: 'warning',
    message: 'Bandwidth usage approaching limit',
    timestamp: '15 minutes ago',
    details: 'Current usage: 85% of allocated bandwidth'
  },
  {
    id: 3,
    type: 'success',
    message: 'Backup system synchronized successfully',
    timestamp: '1 hour ago',
    details: 'All critical data backed up'
  },
  {
    id: 4,
    type: 'error',
    message: 'Network latency spike detected',
    timestamp: '2 hours ago',
    details: 'Latency exceeded 200ms threshold'
  }
];

const AlertIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'error':
      return <XCircle className="w-5 h-5 text-red-500" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'success':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    default:
      return <Bell className="w-5 h-5 text-gray-500" />;
  }
};

export default function AlertsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Network Alerts</h3>
            <p className="text-sm text-gray-500">Real-time system notifications</p>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-500">
            Mark all as read
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 hover:bg-gray-50">
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <AlertIcon type={alert.type} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{alert.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button className="text-sm text-gray-500 hover:text-gray-700 w-full text-center">
          View all alerts
        </button>
      </div>
    </div>
  );
}