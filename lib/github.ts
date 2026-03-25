import type { GitHubRepo, GitHubStats } from '@/types';

const GITHUB_USERNAME = 'Hdlmrbt';
const GITHUB_API = 'https://api.github.com';

// Static fallback data (used when API is unavailable or rate-limited)
export const staticGitHubStats: GitHubStats = {
  username:    GITHUB_USERNAME,
  name:        'Houda Lamrabet',
  bio:         null,
  avatarUrl:   'https://avatars.githubusercontent.com/u/188856699?v=4',
  publicRepos: 1,
  followers:   0,
  following:   1,
  createdAt:   '2024-11-18T11:18:02Z',
  repos: [
    {
      id:          890319176,
      name:        'galerie-photo-interactive',
      description: 'An interactive photo gallery with dynamic CSS animations.',
      language:    'HTML',
      stars:       0,
      forks:       0,
      url:         'https://github.com/Hdlmrbt/galerie-photo-interactive',
      homepage:    null,
      topics:      ['html', 'css', 'javascript', 'gallery'],
      updatedAt:   '2024-11-18T11:31:07Z',
    },
  ],
};

// Language color mapping for visual display
export const languageColors: Record<string, string> = {
  Python:     '#3776AB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
  Jupyter:    '#F37626',
  Django:     '#092E20',
  Shell:      '#89E051',
};

export function getLanguageColor(lang: string | null): string {
  if (!lang) return '#C5AF97';
  return languageColors[lang] ?? '#E87090';
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    };

    // Add token if available (prevents rate limiting)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return staticGitHubStats;
    }

    const user = await userRes.json();
    const repos: GitHubRepo[] = (await reposRes.json()).map((r: {
      id: number;
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      html_url: string;
      homepage: string | null;
      topics: string[];
      updated_at: string;
    }) => ({
      id:          r.id,
      name:        r.name,
      description: r.description,
      language:    r.language,
      stars:       r.stargazers_count,
      forks:       r.forks_count,
      url:         r.html_url,
      homepage:    r.homepage,
      topics:      r.topics ?? [],
      updatedAt:   r.updated_at,
    }));

    return {
      username:    user.login,
      name:        user.name ?? GITHUB_USERNAME,
      bio:         user.bio,
      avatarUrl:   user.avatar_url,
      publicRepos: user.public_repos,
      followers:   user.followers,
      following:   user.following,
      createdAt:   user.created_at,
      repos,
    };
  } catch {
    return staticGitHubStats;
  }
}

export function getTopLanguages(repos: GitHubRepo[]): { language: string; count: number; color: string }[] {
  const counts: Record<string, number> = {};
  for (const r of repos) {
    if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([language, count]) => ({ language, count, color: getLanguageColor(language) }));
}
