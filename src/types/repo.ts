export interface Repo {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
}
