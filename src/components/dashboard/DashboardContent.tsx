"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageEditor from '@/components/dashboard/PageEditor';
import { fetchAppMetadata } from '@/lib/api';
import { AppMetadata, Page } from '@/types';

const DashboardContent: React.FC = () => {
  const [appMetadata, setAppMetadata] = useState<AppMetadata | null>(null);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const searchParams = useSearchParams();
  const appId = searchParams.get('appId');

  useEffect(() => {
    if (appId) {
      const loadAppMetadata = async () => {
        const metadata = await fetchAppMetadata(appId);
        setAppMetadata(metadata);
      };
      loadAppMetadata();
    }
  }, [appId]);

  const handlePageSelect = (page: Page) => {
    setSelectedPage(page);
  };

  if (!appMetadata) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Pages</h2>
        <ul>
          {appMetadata.pages.map((page) => (
            <li
              key={page.id}
              className="p-2 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => handlePageSelect(page)}
            >
              {page.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPage && (
        <div className="md:col-span-2">
          <PageEditor page={selectedPage} />
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
