import type { Project } from '../types/project.js';

export const projects: readonly Project[] = [
  {
    name: 'Stoic-API',
    description: 'A REST API that serves quotes from Stoic philosophers.',
    repositoryUrl: 'https://github.com/Carlosaac23/stoic-API',
    demoUrl: 'https://stoic-api-red.vercel.app/',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    image: {
      src: '/static/projects/stoic-api.png',
      alt: 'Stoic API documentation and interactive quote preview',
      width: 1280,
      height: 800,
    },
  },
  {
    name: 'APV',
    description: 'A web interface for managing veterinary patients and their records.',
    repositoryUrl: 'https://github.com/Carlosaac23/APV-frontend',
    demoUrl: 'https://apv-frontend.carlosaac232001.workers.dev/',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    image: {
      src: '/static/projects/apv.png',
      alt: 'APV landing page with an overview of the veterinary dashboard',
      width: 1280,
      height: 800,
    },
  },
  {
    name: 'Genkey-cli',
    description: 'A command-line tool for generating secret keys and UUIDs.',
    repositoryUrl: 'https://github.com/Carlosaac23/genkey-cli',
    demoUrl: 'https://www.genkey-cli.site/',
    technologies: ['TypeScript', 'Node.js', 'Clipboardy'],
    image: {
      src: '/static/projects/genkey-cli.png',
      alt: 'Screenshot of genkey-cli',
      width: 1038,
      height: 566,
    },
  },
];
