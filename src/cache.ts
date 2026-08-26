import { LRUCache } from 'lru-cache/raw';

import type { Repo } from './types/repo.js';
import { env } from './config/env.js';

export const reposCache = new LRUCache<string, Repo[]>({
  max: 1,
  ttl: env.CACHE_TTL_MS,
});
