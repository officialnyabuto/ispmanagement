import React from 'react';
import { CreditCard, DollarSign, Receipt, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import InvoiceList from '../components/billing/InvoiceList';
import PaymentHistory from '../components/billing/PaymentHistory';
import SubscriptionOverview from '../components/billing/SubscriptionOverview';

export default function Billing() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Billing Management</h1>
        <p className="text-gray-500">Manage invoices, payments, and subscriptions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Monthly Revenue"
          value="$45,231"
          trend={15}
          icon={DollarSign}
          color="bg-green-500"
        />
        <StatCard
          title="Active Subscriptions"
          value="1,234"
          trend={8}
          icon={Users}
          color="bg-blue-500"
        />
        <StatCard
          title="Pending Payments"
          value="23"
          trend={-5}
          icon={CreditCard}
          color="bg-yellow-500"
        />
        <StatCard
          title="Overdue Invoices"
          value="12"
          trend={-2}
          icon={Receipt}
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SubscriptionOverview />
        <PaymentHistory />
      </div>

      <InvoiceList />
    </div>
  );
}