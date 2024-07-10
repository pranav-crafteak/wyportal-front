import Image from 'next/image';
import { Template } from '@/types';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <Image
        src={template.image}
        alt={template.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{template.title}</h2>
        <p className="text-gray-600 truncate">{template.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {template.multiUser ? 'Multi-user' : 'Single-user'} | 
          Power: {template.instancePower}
        </p>
        <p className="text-sm text-gray-500">
          Cloud Zones: {template.cloudZones.join(', ')}
        </p>
      </div>
    </div>
  );
}