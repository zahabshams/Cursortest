'use client';

import { Users, TrendingUp, Phone, Award, DollarSign, UserCheck } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Leads', value: 156, icon: Users, color: 'blue' },
    { label: "Today's Leads", value: 8, icon: TrendingUp, color: 'green' },
    { label: 'Qualified Leads', value: 92, icon: Award, color: 'amber' },
    { label: 'Pending Calls', value: 23, icon: Phone, color: 'red' },
    { label: 'Won Projects', value: 34, icon: UserCheck, color: 'purple' },
    { label: 'Revenue', value: '₹17 Cr', icon: DollarSign, color: 'emerald' },
  ];

  const leads = [
    { name: 'Rajesh Sharma', email: 'rajesh@example.com', budget: '₹2.5 Cr', score: 92, status: 'qualified' },
    { name: 'Meera Iyer', email: 'meera@example.com', budget: '₹1.8 Cr', score: 87, status: 'consultation' },
    { name: 'Vikram Patel', email: 'vikram@example.com', budget: '₹3.2 Cr', score: 95, status: 'design' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6">
              <stat.icon className="w-8 h-8 text-amber-600 mb-4" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Lead Management</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{lead.name}</td>
                    <td className="px-6 py-4 text-gray-600">{lead.email}</td>
                    <td className="px-6 py-4 font-semibold">{lead.budget}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                        {lead.score}/100
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
