"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchAppMetadata } from '@/lib/api';
import { AppMetadata, Page, Section } from '@/types';

interface AppEditorProps {
  appId: string;
}

const AppEditor: React.FC<AppEditorProps> = ({ appId }) => {
  const [appMetadata, setAppMetadata] = useState<AppMetadata | null>(null);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  useEffect(() => {
    const loadAppMetadata = async () => {
      try {
        const metadata = await fetchAppMetadata(appId);
        setAppMetadata(metadata);
        if (metadata.pages.length > 0) {
          setSelectedPage(metadata.pages[0]);
        }
      } catch (error) {
        console.error('Error loading app metadata:', error);
      }
    };
    loadAppMetadata();
  }, [appId]);

  const handleAddSection = () => {
    if (selectedPage) {
      const newSection: Section = {
        id: Date.now().toString(),
        type: 'text',
        content: 'New section content'
      };
      setSelectedPage({
        ...selectedPage,
        sections: [...selectedPage.sections, newSection]
      });
    }
  };

  const handleRemoveSection = (sectionId: string) => {
    if (selectedPage) {
      setSelectedPage({
        ...selectedPage,
        sections: selectedPage.sections.filter(section => section.id !== sectionId)
      });
    }
  };

  const handleUpdateSection = (sectionId: string, content: string) => {
    if (selectedPage) {
      setSelectedPage({
        ...selectedPage,
        sections: selectedPage.sections.map(section =>
          section.id === sectionId ? { ...section, content } : section
        )
      });
    }
  };

  const handleSave = () => {
    if (appMetadata && selectedPage) {
      const updatedPages = appMetadata.pages.map(page =>
        page.id === selectedPage.id ? selectedPage : page
      );
      const updatedMetadata = { ...appMetadata, pages: updatedPages };
      console.log('Saving app:', updatedMetadata);
      // Implement the save functionality here
    }
  };

  if (!appMetadata || !selectedPage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{selectedPage.name}</h1>
      {selectedPage.sections.map((section) => (
        <div key={section.id} className="mb-4 p-4 border rounded">
          {section.type === 'text' ? (
            <textarea
              className="w-full p-2 border rounded"
              value={section.content}
              onChange={(e) => handleUpdateSection(section.id, e.target.value)}
            />
          ) : (
            <div>
              <Image
                src={section.content}
                alt="Section image"
                width={300}
                height={200}
                className="mb-2"
              />
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={section.content}
                onChange={(e) => handleUpdateSection(section.id, e.target.value)}
                placeholder="Image URL"
              />
            </div>
          )}
          <button
            onClick={() => handleRemoveSection(section.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove Section
          </button>
        </div>
      ))}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleAddSection}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Section
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AppEditor;