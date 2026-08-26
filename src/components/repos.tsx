import type { Repo } from '../types/repo.js';

import ProjectCard from './project-card.js';

type RepoProps = { repos: Repo[] };

export default function Repos({ repos }: RepoProps) {
  const hasRepos = repos.length > 0;

  return (
    <section id='projects'>
      <h2 class='projects__title'>Projects</h2>

      {hasRepos ? (
        <div class='projects__container'>
          {repos?.map(repo => (
            <ProjectCard key={repo.name} {...repo} />
          ))}
        </div>
      ) : (
        <p class='projects__empty'>No projects available right now. Please check back later.</p>
      )}
    </section>
  );
}
