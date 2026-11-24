import type { Repo } from '../types/repo.js';

import ProjectCard from './project-card.js';

type RepoProps = { repos: Repo[] };

export default function Repos({ repos }: RepoProps) {
  const hasRepos = repos.length > 0;

  return (
    <section id='projects' aria-labelledby='projects-title'>
      <div class='projects__heading'>
        <div>
          <p class='projects__eyebrow'>Projects</p>
          <h2 class='projects__title' id='projects-title'>
            Selected work.
          </h2>
        </div>
        <span class='projects__count'>{String(repos.length).padStart(2, '0')} projects</span>
      </div>
      {hasRepos ? (
        <ol class='projects__container'>
          {repos.map((repo, index) => (
            <ProjectCard key={repo.name} {...repo} index={index} />
          ))}
        </ol>
      ) : (
        <p class='projects__empty'>No projects available right now. Please check back later.</p>
      )}
    </section>
  );
}
