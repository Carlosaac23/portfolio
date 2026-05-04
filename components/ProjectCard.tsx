import { SquareArrowOutUpRight } from 'lucide-react';

import type { Project } from '@/types';

export default function ProjectCard({
  name,
  html_url,
  homepage,
  description,
  topics,
}: Project) {
  return (
    <article className='flex max-h-44 flex-col justify-between rounded-xl border border-(--border) px-3.5 py-2 transition-colors duration-250 ease-out hover:border-(--border-light) max-sm:w-auto lg:px-4 lg:py-3'>
      <div>
        <h3 className='text-lg tracking-wide text-(--foreground)'>{name}</h3>
        <div className='max-h-14 overflow-y-auto text-sm text-(--gray)'>
          <p className='mr-1 mb-2 text-pretty'>
            {description || 'No description available'}
          </p>
        </div>
        {homepage ? (
          <a
            className='text-xs text-(--gray) hover:text-(--foreground-secondary) sm:text-sm'
            href={homepage}
            rel='noopener noreferrer'
            target='_blank'
            title='A live page link to this project'
          >
            <span className='inline-flex items-center gap-1 text-sm'>
              View website
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-sm text-(--gray)'>No live demo available</span>
        )}

        <span className='mx-2 text-(--gray)'>|</span>

        {html_url ? (
          <a
            className='text-xs text-(--gray) hover:text-(--foreground-secondary) sm:text-sm'
            href={html_url}
            rel='noopener noreferrer'
            target='_blank'
            title='A repository link to this project'
          >
            <span className='inline-flex items-center gap-1 text-sm'>
              View on GitHub
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-sm text-(--gray)'>No live demo available</span>
        )}
      </div>
      <ul className='mt-2 flex max-h-8 flex-wrap gap-2 overflow-y-auto py-0.5 pr-2'>
        {topics.map(topic => (
          <li
            className='rounded-md border border-(--border) px-2 py-1 text-xs text-(--foreground-secondary)'
            key={topic}
          >
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
