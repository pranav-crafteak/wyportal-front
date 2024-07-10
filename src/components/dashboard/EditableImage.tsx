"use client";

import React from 'react';

interface EditableImageProps {
  src: string;
  onChange: (src: string) => void;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, onChange }) => {
  return (
    <div>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2"
        value={src}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Image URL"
      />
      {src && <img src={src} alt="Editable" className="w-full rounded" />}
    </div>
  );
};

export default EditableImage;
