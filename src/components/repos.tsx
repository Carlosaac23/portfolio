import type { Repo } from '../types/repo.js';

import ProjectCard from './project-card.js';

type RepoProps = { repos: Repo[] };

export default function Repos({ repos }: RepoProps) {
  return (
    <section id='projects'>
      <h2 class='projects__title'>Projects</h2>

      <div class='projects__container'>
        {repos?.map(repo => (
          <ProjectCard key={repo.name} {...repo} />
        ))}
      </div>
    </section>
  );
}
