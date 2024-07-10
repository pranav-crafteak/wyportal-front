"use client";

import React, { useState } from 'react';
import SectionEditor from '../../components/dashboard/SectionEditor';
import { Page, Section } from '@/types';

interface PageEditorProps {
  page: Page;
}

const PageEditor: React.FC<PageEditorProps> = ({ page }) => {
  const [sections, setSections] = useState<Section[]>(page.sections);

  const handleSectionUpdate = (index: number, updatedSection: Section) => {
    const newSections = [...sections];
    newSections[index] = updatedSection;
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { id: Date.now().toString(), type: 'text', content: '' }]);
  };

  const handleRemoveSection = (index: number) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{page.name}</h2>
      {sections.map((section, index) => (
        <SectionEditor
          key={section.id}
          section={section}
          onUpdate={(updatedSection) => handleSectionUpdate(index, updatedSection)}
          onRemove={() => handleRemoveSection(index)}
        />
      ))}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
        onClick={handleAddSection}
      >
        Add Section
      </button>
    </div>
  );
};

export default PageEditor;
