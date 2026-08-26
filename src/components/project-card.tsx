import type { Repo } from '../types/repo.js';

import ExternalLinkIcon from './external-link.js';

export default function ProjectCard({ name, html_url, homepage, description, topics }: Repo) {
  return (
    <div class='project__card'>
      <div>
        <h3 class='project__card-title'>{name}</h3>
        <div class='project__card-description-container'>
          <p class='project__card-description'>{description || 'No description available'}</p>
        </div>

        {homepage ? (
          <a
            class='project__card-homepage'
            href={homepage}
            rel='noopener noreferrer'
            target='_blank'
            title='A live page link to this project'
          >
            <span class='project__card-homepage-span'>
              View website
              <ExternalLinkIcon />
            </span>
          </a>
        ) : (
          <span class='project__card-homepage-span-2'>No live demo available</span>
        )}

        <span class='separator'>|</span>

        {html_url ? (
          <a
            class='project__card-homepage'
            href={html_url}
            rel='noopener noreferrer'
            target='_blank'
            title='A repository link to this project'
          >
            <span class='project__card-homepage-span'>
              View on GitHub
              <ExternalLinkIcon />
            </span>
          </a>
        ) : (
          <span class='project__card-homepage-span-2'>No repo available</span>
        )}
      </div>
      <ul class='project__card-topics'>
        {topics?.map(topic => (
          <li class='project__card-topic' key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
