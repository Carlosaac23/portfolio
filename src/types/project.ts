export interface Project {
  name: string;
  description: string;
  repositoryUrl: string;
  demoUrl?: string;
  technologies: readonly string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
