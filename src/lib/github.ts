import type { Repo } from '../types/repo.js';

import { env } from '../config/env.js';

export default async function getRepos(): Promise<Repo[]> {
  const url = 'https://api.github.com/users/carlosaac23/repos?per_page=100';

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      console.error(`Error fetching repos: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: Repo[] = await res.json();
    return data.filter(repo => repo.stargazers_count >= 1 && !repo.fork);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}
