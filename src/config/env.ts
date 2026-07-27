import type { EnvVariables } from '../types/index.js';

export const env: EnvVariables = {
  PORT: Number(process.env.PORT) || 3000,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
  NODE_ENV: (process.env.NODE_ENV as EnvVariables['NODE_ENV']) ?? 'development',
};
