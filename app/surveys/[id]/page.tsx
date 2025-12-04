import SurveyDetailClient from './SurveyDetailClient';
import { readFileSync } from 'fs';
import { join } from 'path';

interface Survey {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  videos?: Array<{ url: string; title: string }>;
  questions: any[];
}

export function generateStaticParams() {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'surveys.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const surveys: Survey[] = JSON.parse(fileContents);
    return surveys.map((survey) => ({ id: survey.id }));
  } catch (error) {
    console.error('Error reading surveys.json:', error);
    return [];
  }
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SurveyDetailPage({ params }: PageProps) {
  const { id } = await params;
  let survey: Survey | null = null;
  
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'surveys.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const surveys: Survey[] = JSON.parse(fileContents);
    survey = surveys.find((s) => s.id === id) || null;
  } catch (error) {
    console.error('Error reading surveys.json:', error);
  }

  return <SurveyDetailClient survey={survey} />;
}

