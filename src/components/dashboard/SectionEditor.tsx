"use client";

import React from 'react';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import { Section } from '@/types';

interface SectionEditorProps {
  section: Section;
  onUpdate: (updatedSection: Section) => void;
  onRemove: () => void;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section, onUpdate, onRemove }) => {
  const handleContentChange = (content: string) => {
    onUpdate({ ...section, content });
  };

  return (
    <div className="mb-4 p-4 border rounded">
      {section.type === 'text' && (
        <EditableText content={section.content} onChange={handleContentChange} />
      )}
      {section.type === 'image' && (
        <EditableImage src={section.content} onChange={handleContentChange} />
      )}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
        onClick={onRemove}
      >
        Remove Section
      </button>
    </div>
  );
};

export default SectionEditor;
