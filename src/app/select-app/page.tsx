import React from 'react';
import AppSelector from '@/components/AppSelector';

const SelectAppPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select an App</h1>
      <AppSelector />
    </div>
  );
};

export default SelectAppPage;
