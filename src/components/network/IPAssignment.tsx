import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const ipAssignments = [
  { id: 1, name: 'Main Server', ip: '192.168.1.10', mac: '00:1B:44:11:3A:B7', type: 'Static', status: 'Active' },
  { id: 2, name: 'Backup Server', ip: '192.168.1.11', mac: '00:1B:44:11:3A:B8', type: 'Static', status: 'Active' },
  { id: 3, name: 'Office Printer', ip: '192.168.1.20', mac: '00:1B:44:11:3A:C1', type: 'Reserved', status: 'Active' },
  { id: 4, name: 'Guest Network', ip: '192.168.2.1', mac: '00:1B:44:11:3A:D5', type: 'DHCP', status: 'Active' },
];

export default function IPAssignment() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">IP Assignment</h3>
            <p className="text-sm text-gray-500">Manage static and dynamic IP addresses</p>
          </div>
          <button 
            className="btn"
            onClick={() => setShowForm(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add IP
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search by IP, MAC, or name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MAC Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ipAssignments.map((assignment) => (
              <tr key={assignment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{assignment.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.ip}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.mac}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${assignment.type === 'Static' ? 'bg-blue-100 text-blue-800' : 
                      assignment.type === 'Reserved' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                    {assignment.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {assignment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}