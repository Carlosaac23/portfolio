export interface Project {
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
}

export type Link = {
  url: string;
  title: string;
  label: string;
};
