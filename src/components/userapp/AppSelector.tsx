// AppSelector.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApps, fetchTemplates } from '@/lib/api';
import { App, Template } from '@/types';
import TemplateSelectionModal from './TemplateSelectionModal';

const AppSelector: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [appsData, templatesData] = await Promise.all([fetchApps(), fetchTemplates()]);
        setApps(appsData);
        setTemplates(templatesData);
      } catch (error) {
        console.error('Error loading data:', error);
        // Handle error (e.g., show error message to user)
      }
    };
    loadData();
  }, []);

  const handleAppSelect = (appId: string) => {
    router.push(`/dashboard?appId=${appId}`);
  };

  const handleCreateNewApp = () => {
    setIsModalOpen(true);
  };

  const handleTemplateSelect = (templateId: number) => {
    console.log('Selected template:', templateId);
    setIsModalOpen(false);
    // Add logic to create a new app with the selected template
    // For example: router.push(`/create-app?templateId=${templateId}`);
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
        onTemplateSelect={handleTemplateSelect}
        templates={templates}
      />
    </div>
  );
};

export default AppSelector;