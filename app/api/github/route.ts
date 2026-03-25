import { NextResponse } from 'next/server';
import { fetchGitHubStats, staticGitHubStats } from '@/lib/github';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const stats = await fetchGitHubStats();
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(staticGitHubStats);
  }
}
