import TemplateCard from '@/components/templates/TemplateCard';
import { Template } from '@/types';

async function getTemplates(): Promise<Template[]> {
  const templates = await import('/public/data/templates.json').then(
    (module) => module.default
  );
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