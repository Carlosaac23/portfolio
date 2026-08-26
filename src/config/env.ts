import type { EnvVariables } from '../types/index.js';

export const env: EnvVariables = {
  PORT: Number(process.env.PORT) || 3000,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
  CACHE_TTL_MS: parseInt(process.env.CACHE_TTL_MS ?? '3600000', 10),
};
