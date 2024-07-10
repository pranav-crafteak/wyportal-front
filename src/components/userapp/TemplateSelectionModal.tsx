import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import { Template } from '@/types';
import { fetchTemplates } from '@/lib/api';

interface TemplateSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTemplateSelect: (templateId: number) => void;
}

const TemplateSelectionModal: React.FC<TemplateSelectionModalProps> = ({ isOpen, onClose, onTemplateSelect }) => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const templatesData = await fetchTemplates();
        setTemplates(templatesData);
      } catch (error) {
        console.error('Error loading templates:', error);
      }
    };
    if (isOpen) {
      loadTemplates();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Choose a Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.id} onClick={() => onTemplateSelect(template.id)}>
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TemplateSelectionModal;