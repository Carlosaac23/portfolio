import { LRUCache } from 'lru-cache/raw';

import type { Repo } from './types/repo.js';

const ONE_HOUR = 1000 * 60 * 60;

export const reposCache = new LRUCache<string, Repo[]>({
  max: 1,
  ttl: ONE_HOUR,
});
