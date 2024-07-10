import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Template } from '@/types';

async function getTemplates(): Promise<Template[]> {
  const templates = await import('/public/data/templates.json').then(
    (module) => module.default
  );
  return templates;
}

async function getTemplateById(id: string): Promise<Template | undefined> {
  const templates = await getTemplates();
  return templates.find((t) => t.id.toString() === id);
}

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((template) => ({
    id: template.id.toString(),
  }));
}

export default async function TemplateDetails({ params }: { params: { id: string } }) {
  const template = await getTemplateById(params.id);

  if (!template) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{template.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={template.image}
            alt={template.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">{template.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Options</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Multi-user support: {template.multiUser ? 'Yes' : 'No'}</li>
            <li>Cloud zones: {template.cloudZones.join(', ')}</li>
            <li>Instance power: {template.instancePower}</li>
          </ul>
          <Link href="/create-profile" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Use This Template
          </Link>
        </div>
      </div>
    </div>
  );
}