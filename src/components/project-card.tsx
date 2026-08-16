import type { Repo } from '../types/repo.js';

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right'
              >
                <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                <path d='m21 3-9 9' />
                <path d='M15 3h6v6' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right'
              >
                <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                <path d='m21 3-9 9' />
                <path d='M15 3h6v6' />
              </svg>
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
