import type { Repo } from '../types/repo.js';

import { reposCache } from '../cache.js';
import { env } from '../config/env.js';

export default async function getRepos(): Promise<Repo[]> {
  const url = 'https://api.github.com/search/repositories?q=user:carlosaac23+fork:false+stars:>=1';
  const CACHE_KEY = 'repos';
  const cachedRepos = reposCache.get(CACHE_KEY);

  if (cachedRepos) return cachedRepos;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  if (env.GITHUB_TOKEN.trim()) {
    headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(url, { headers });

    if (!res.ok) {
      if (res.status === 429) {
        console.error('Rate limit exceeded fetching repos. Try again later.');
        return [];
      }
      console.error(`Error fetching repos: ${res.status} ${res.statusText}`);
      return [];
    }

    const { items } = await res.json();

    reposCache.set(CACHE_KEY, items);

    return items;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error fetching repos:', error.message);
    } else {
      console.error('Unexpected error fetching repos:', error);
    }
    return [];
  }
}
