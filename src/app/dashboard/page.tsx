import React from 'react';
import DashboardContent from '@/components/dashboard/DashboardContent';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
