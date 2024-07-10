import fs from 'fs/promises';
import path from 'path';
import { Template } from '@/types';
import TemplateCard from '@/components/templates/TemplateCard';

async function getTemplates(): Promise<Template[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'templates.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const templates: Template[] = JSON.parse(jsonData);
  return templates;
}

export default async function ChooseTemplate() {
  const templates = await getTemplates();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}