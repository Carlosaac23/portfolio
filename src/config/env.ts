import type { EnvVariables } from '../types/index.js';

export const env: EnvVariables = {
  PORT: Number(process.env.PORT) || 3000,
};
