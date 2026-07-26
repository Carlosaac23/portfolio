export interface Repo {
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
}
