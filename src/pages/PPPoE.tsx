import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import CustomerList from '../components/customers/CustomerList';
import CustomerForm from '../components/customers/CustomerForm';
import UsageChart from '../components/customers/UsageChart';

export default function PPPoE() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: any) => {
    console.log('New customer data:', data);
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">PPPoE Management</h1>
          <p className="text-gray-500">Manage your PPPoE customers and their connections</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="btn" onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="mb-8">
        <UsageChart />
      </div>

      <CustomerList />

      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <CustomerForm onClose={() => setShowForm(false)} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}