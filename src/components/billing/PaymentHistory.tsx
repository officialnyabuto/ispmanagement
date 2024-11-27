import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const payments = [
  {
    id: 1,
    customer: 'Alice Johnson',
    amount: 59.99,
    status: 'Successful',
    method: 'M-PESA',
    date: '2024-03-10 14:30'
  },
  {
    id: 2,
    customer: 'Bob Smith',
    amount: 29.99,
    status: 'Failed',
    method: 'M-PESA',
    date: '2024-03-10 13:15'
  },
  {
    id: 3,
    customer: 'Carol White',
    amount: 99.99,
    status: 'Successful',
    method: 'Bank Transfer',
    date: '2024-03-10 11:45'
  },
  {
    id: 4,
    customer: 'David Brown',
    amount: 39.99,
    status: 'Successful',
    method: 'M-PESA',
    date: '2024-03-10 10:20'
  }
];

export default function PaymentHistory() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
            <p className="text-sm text-gray-500">Recent payment transactions</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {payments.map((payment) => (
          <div key={payment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {payment.status === 'Successful' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <div className="font-medium text-gray-900">{payment.customer}</div>
                  <div className="text-sm text-gray-500">{payment.method}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">${payment.amount}</div>
                <div className="text-sm text-gray-500">{payment.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button className="text-sm text-gray-500 hover:text-gray-700 w-full text-center">
          View all transactions
        </button>
      </div>
    </div>
  );
}