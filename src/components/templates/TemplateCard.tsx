import Link from 'next/link';
import Image from 'next/image';
import { Template } from '@/types';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/template-details/${template.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        </div>
      </div>
    </Link>
  );
}