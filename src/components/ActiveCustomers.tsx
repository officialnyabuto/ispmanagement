import React from 'react';
import { MoreVertical } from 'lucide-react';

const customers = [
  { id: 1, name: 'Alice Johnson', plan: 'Business Pro', status: 'Active', usage: '85%' },
  { id: 2, name: 'Bob Smith', plan: 'Home Premium', status: 'Active', usage: '45%' },
  { id: 3, name: 'Carol White', plan: 'Enterprise', status: 'Warning', usage: '92%' },
  { id: 4, name: 'David Brown', plan: 'Home Basic', status: 'Active', usage: '30%' },
];

export default function ActiveCustomers() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Active Customers</h3>
            <p className="text-sm text-gray-500">Recent customer activity</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Plan</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Usage</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-100">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{customer.name}</div>
                </td>
                <td className="px-6 py-4 text-gray-500">{customer.plan}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${
                          parseInt(customer.usage) > 90 ? 'bg-red-500' : 
                          parseInt(customer.usage) > 75 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: customer.usage }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{customer.usage}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}