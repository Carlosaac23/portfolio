// import type { Repo } from '../types/repo.js';
import type { Project } from '../types/project.js';

// import { topicLabels } from '../data/topics.js';
import ExternalLinkIcon from './external-link.js';

type ProjectCardProps = Project & { index: number };

export default function ProjectCard({
  name,
  description,
  repositoryUrl,
  demoUrl,
  technologies,
  image,
  index,
}: ProjectCardProps) {
  return (
    <li class='project__card'>
      <span class='project__number' aria-hidden='true'>
        {String(index + 1).padStart(2, '0')}
      </span>
      <article class='project__content' aria-labelledby={`project-${index}`}>
        <h3 class='project__card-title' id={`project-${index}`}>
          {name}
        </h3>
        <p class='project__card-description'>{description}</p>
        {technologies.length > 0 ? (
          <ul class='project__card-topics' aria-label='Technologies'>
            {technologies.map(technology => (
              <li class='project__card-topic' key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
        <div class='project__actions'>
          {demoUrl ? (
            <a class='project__link' href={demoUrl} target='_blank' rel='noopener noreferrer'>
              Live demo <ExternalLinkIcon />
              <span class='project__sr-only'> for {name} (opens in a new tab)</span>
            </a>
          ) : null}

          <a class='project__link' href={repositoryUrl} target='_blank' rel='noopener noreferrer'>
            GitHub <ExternalLinkIcon />
            <span class='project__sr-only'> for {name} (opens in a new tab)</span>
          </a>
        </div>
      </article>
      <div class='project__preview'>
        {image ? (
          <img
            class='project__screenshot'
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading='lazy'
            decoding='async'
          />
        ) : (
          <div class='project__repository-preview'>
            <span class='project__preview-label'>Repository / {name}</span>
            <span class='project__preview-symbol' aria-hidden='true'>
              {'{ }'}
            </span>
            <span class='project__preview-stack'>
              {technologies.join(' / ') || 'Source code on GitHub'}
            </span>
          </div>
        )}
      </div>
    </li>
  );
}
