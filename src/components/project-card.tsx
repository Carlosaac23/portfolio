import type { Repo } from '../types/repo.js';

import { topicLabels } from '../data/topics.js';
import ExternalLinkIcon from './external-link.js';

type ProjectCardProps = Repo & { index: number };

const screenshots: Record<string, string> = {
  'stoic-API': 'stoic-api',
  'genkey-cli': 'genkey-cli',
  'APV-frontend': 'apv',
};

export default function ProjectCard({
  name,
  html_url,
  homepage,
  description,
  topics,
  index,
}: ProjectCardProps) {
  const screenshot = screenshots[name];
  const stack = (topics ?? [])
    .filter(topic => topicLabels[topic])
    .slice(0, 4)
    .map(topic => topicLabels[topic]);

  return (
    <li class='project__card'>
      <span class='project__number' aria-hidden='true'>
        {String(index + 1).padStart(2, '0')}
      </span>
      <article class='project__content' aria-labelledby={`project-${index}`}>
        <h3 class='project__card-title' id={`project-${index}`}>
          {name}
        </h3>
        <p class='project__card-description'>{description || 'Explore this project on GitHub.'}</p>
        {stack.length > 0 ? (
          <ul class='project__card-topics' aria-label='Technologies'>
            {stack.map(topic => (
              <li class='project__card-topic' key={topic}>
                {topic}
              </li>
            ))}
          </ul>
        ) : null}
        <div class='project__actions'>
          {homepage ? (
            <a class='project__link' href={homepage} target='_blank' rel='noopener noreferrer'>
              Live demo <ExternalLinkIcon />
              <span class='project__sr-only'> for {name} (opens in a new tab)</span>
            </a>
          ) : null}
          {html_url ? (
            <a class='project__link' href={html_url} target='_blank' rel='noopener noreferrer'>
              GitHub <ExternalLinkIcon />
              <span class='project__sr-only'> for {name} (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </article>
      <div class='project__preview'>
        {screenshot ? (
          <img
            class='project__screenshot'
            src={`/static/projects/${screenshot}.png`}
            alt={`Screenshot of the ${name} website`}
            width='1280'
            height='800'
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
              {stack.join(' / ') || 'Source code on GitHub'}
            </span>
          </div>
        )}
      </div>
    </li>
  );
}
