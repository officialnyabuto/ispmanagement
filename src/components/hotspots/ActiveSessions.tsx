import React from 'react';
import { Clock, Wifi } from 'lucide-react';

const sessions = [
  {
    id: 1,
    device: 'iPhone 13',
    hotspot: 'Mall Plaza Hotspot',
    duration: '45m',
    dataUsed: '1.2GB',
    signal: 85,
  },
  {
    id: 2,
    device: 'Samsung Galaxy S21',
    hotspot: 'Central Station WiFi',
    duration: '2h 15m',
    dataUsed: '3.5GB',
    signal: 92,
  },
  {
    id: 3,
    device: 'MacBook Pro',
    hotspot: 'Mall Plaza Hotspot',
    duration: '30m',
    dataUsed: '850MB',
    signal: 78,
  },
  {
    id: 4,
    device: 'iPad Air',
    hotspot: 'Central Station WiFi',
    duration: '1h 5m',
    dataUsed: '2.1GB',
    signal: 88,
  },
];

export default function ActiveSessions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Active Sessions</h3>
            <p className="text-sm text-gray-500">Currently connected devices</p>
          </div>
          <Clock className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {sessions.map((session) => (
          <div key={session.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">{session.device}</div>
                <div className="text-sm text-gray-500">{session.hotspot}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{session.duration}</div>
                  <div className="text-sm text-gray-500">{session.dataUsed}</div>
                </div>
                <div className="flex items-center">
                  <Wifi className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-500">{session.signal}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}