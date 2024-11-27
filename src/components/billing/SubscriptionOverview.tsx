import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { plan: 'Basic', active: 450, churned: 23 },
  { plan: 'Premium', active: 680, churned: 35 },
  { plan: 'Business', active: 234, churned: 12 },
  { plan: 'Enterprise', active: 78, churned: 4 },
];

export default function SubscriptionOverview() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Subscription Overview</h3>
          <p className="text-sm text-gray-500">Active vs. churned subscriptions by plan</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="plan" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="active" name="Active" fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="churned" name="Churned" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Total Active</div>
          <div className="text-2xl font-bold text-gray-900">1,442</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Churn Rate</div>
          <div className="text-2xl font-bold text-gray-900">5.1%</div>
        </div>
      </div>
    </div>
  );
}