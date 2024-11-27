import React from 'react';
import { Download, MoreHorizontal, Plus } from 'lucide-react';

const invoices = [
  {
    id: 'INV-2024-001',
    customer: 'Alice Johnson',
    amount: 59.99,
    status: 'Paid',
    dueDate: '2024-03-15',
    plan: 'Business Pro'
  },
  {
    id: 'INV-2024-002',
    customer: 'Bob Smith',
    amount: 29.99,
    status: 'Pending',
    dueDate: '2024-03-20',
    plan: 'Home Premium'
  },
  {
    id: 'INV-2024-003',
    customer: 'Carol White',
    amount: 99.99,
    status: 'Overdue',
    dueDate: '2024-03-01',
    plan: 'Enterprise'
  },
  {
    id: 'INV-2024-004',
    customer: 'David Brown',
    amount: 39.99,
    status: 'Paid',
    dueDate: '2024-03-10',
    plan: 'Home Basic'
  }
];

export default function InvoiceList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
            <p className="text-sm text-gray-500">Manage and track customer invoices</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="btn">
              <Plus className="w-4 h-4 mr-2" />
              New Invoice
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {invoice.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${invoice.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.dueDate}
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