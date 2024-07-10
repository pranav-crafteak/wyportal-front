"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApps } from '@/lib/api';
import { App } from '@/types';

const AppSelector: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadApps = async () => {
      const apps = await fetchApps();
      setApps(apps);
    };
    loadApps();
  }, []);

  const handleAppSelect = (appId: string) => {
    router.push(`/dashboard?appId=${appId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
};

export default AppSelector;
