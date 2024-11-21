import React from 'react';
import { MoreHorizontal, Wifi, WifiOff } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'Alice Johnson',
    plan: 'Business Pro',
    status: 'Active',
    lastPayment: '2024-02-15',
    dueDate: '2024-03-15',
    usage: '85%',
    ip: '192.168.1.101',
  },
  {
    id: 2,
    name: 'Bob Smith',
    plan: 'Home Premium',
    status: 'Active',
    lastPayment: '2024-02-10',
    dueDate: '2024-03-10',
    usage: '45%',
    ip: '192.168.1.102',
  },
  {
    id: 3,
    name: 'Carol White',
    plan: 'Enterprise',
    status: 'Suspended',
    lastPayment: '2024-01-15',
    dueDate: '2024-02-15',
    usage: '0%',
    ip: '192.168.1.103',
  },
];

export default function CustomerList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan & Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage & IP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{customer.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{customer.plan}</div>
                  <div className="flex items-center mt-1">
                    {customer.status === 'Active' ? (
                      <Wifi className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${
                      customer.status === 'Active' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Last: {customer.lastPayment}
                  </div>
                  <div className="text-sm text-gray-500">
                    Due: {customer.dueDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
                  <div className="text-sm text-gray-500 mt-1">{customer.ip}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}