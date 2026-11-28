// import type { Repo } from '../types/repo.js';
import type { Project } from '../types/project.js';

import ProjectCard from './project-card.js';

type ReposProps = { projects: readonly Project[] };

export default function Repos({ projects }: ReposProps) {
  return (
    <section id='projects' aria-labelledby='projects-title'>
      <div class='projects__heading'>
        <div>
          <p class='projects__eyebrow'>Projects</p>
          <h2 class='projects__title' id='projects-title'>
            Selected work.
          </h2>
        </div>
        <span class='projects__count'>{String(projects.length).padStart(2, '0')} projects</span>
      </div>
      {projects.length > 0 ? (
        <ol class='projects__container'>
          {projects.map((project, index) => (
            <ProjectCard key={project.repositoryUrl} {...project} index={index} />
          ))}
        </ol>
      ) : (
        <p class='projects__empty'>No projects available right now. Please check back later.</p>
      )}
    </section>
  );
}
