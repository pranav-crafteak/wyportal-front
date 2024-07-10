"use client";

import React from 'react';

interface EditableTextProps {
  content: string;
  onChange: (content: string) => void;
}

const EditableText: React.FC<EditableTextProps> = ({ content, onChange }) => {
  return (
    <textarea
      className="w-full p-2 border rounded"
      value={content}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default EditableText;
