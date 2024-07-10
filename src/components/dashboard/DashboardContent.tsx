"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApps } from '@/lib/api';
import { App } from '@/types';
import TemplateSelectionModal from '@/components/userapp/TemplateSelectionModal';

const DashboardContent: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadApps = async () => {
      try {
        const appsData = await fetchApps();
        setApps(appsData);
      } catch (error) {
        console.error('Error loading apps:', error);
      }
    };
    loadApps();
  }, []);

  const handleAppSelect = (appId: string) => {
    router.push(`/dashboard/${appId}`);
  };

  const handleCreateNewApp = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Apps</h1>
        <button
          onClick={handleCreateNewApp}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Create New App
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => handleAppSelect(app.id)}
          >
            <h2 className="text-xl font-semibold">{app.name}</h2>
            <p>{app.description}</p>
          </div>
        ))}
      </div>
      <TemplateSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTemplateSelect={(templateId) => {
          console.log('Selected template:', templateId);
          setIsModalOpen(false);
          // Implement new app creation logic here
        }}
      />
    </div>
  );
};

export default DashboardContent;