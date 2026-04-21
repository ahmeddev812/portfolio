import { NextResponse } from 'next/server';
import { projects } from '@/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const filteredProjects = category && category !== 'All'
    ? projects.filter((p) => p.category === category)
    : projects;

  return NextResponse.json(filteredProjects);
}