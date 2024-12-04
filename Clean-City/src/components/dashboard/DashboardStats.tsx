import React from 'react';
import { Trash2, Users, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Total Reports',
    value: '156',
    icon: Trash2,
    trend: '+12% this month'
  },
  {
    label: 'Active Events',
    value: '8',
    icon: Calendar,
    trend: '2 upcoming'
  },
  {
    label: 'Community Members',
    value: '1,204',
    icon: Users,
    trend: '+24 this week'
  },
  {
    label: 'Issues Resolved',
    value: '89%',
    icon: TrendingUp,
    trend: '+5% from last month'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <p className="text-sm text-emerald-600 mt-1">{stat.trend}</p>
            </div>
            <stat.icon className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
      ))}
    </div>
  );
}