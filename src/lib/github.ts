import type { Repo } from '../types/repo.js';

import { reposCache } from '../cache.js';
import { env } from '../config/env.js';

export default async function getRepos(): Promise<Repo[]> {
  const url =
    'https://api.github.com/search/repositories?q=user:carlosaac23+fork:false+stars:>=1';
  const CACHE_KEY = 'repos';
  const cachedRepos = reposCache.get(CACHE_KEY);

  if (cachedRepos) return cachedRepos;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    });

    if (!res.ok) {
      console.error(`Error fetching repos: ${res.status} ${res.statusText}`);
      return [];
    }

    const { items } = await res.json();

    reposCache.set(CACHE_KEY, items);

    return items;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}
