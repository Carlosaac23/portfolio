import { GeistMono } from 'geist/font/mono';
import { SquareArrowOutUpRight } from 'lucide-react';

import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  const { name, html_url, homepage, description, topics } = project;

  return (
    <article className='flex max-h-44 flex-col justify-between border border-neutral-700 p-2.5 transition-colors duration-100 hover:border-neutral-600 max-sm:w-auto lg:p-3'>
      <div>
        <h3 className='text-lg text-neutral-50'>{name}</h3>
        <div className='max-h-14 overflow-y-auto text-sm text-neutral-200'>
          <p className='mr-1 mb-2 text-pretty'>
            {description || 'No description available'}
          </p>
        </div>
        {homepage ? (
          <a
            className='text-xs text-neutral-400 hover:text-neutral-50 sm:text-sm'
            href={homepage}
            rel='noopener noreferrer'
            target='_blank'
            title='A live page link to this project'
          >
            <span
              className={`${GeistMono.className} text-xxs inline-flex items-center gap-0.5 hover:underline hover:underline-offset-2`}
            >
              {'View website'}
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-neutral-400'>No live demo available</span>
        )}

        <span className='mx-2 text-neutral-400'>|</span>

        {html_url ? (
          <a
            className='text-xs text-neutral-400 hover:text-neutral-50 sm:text-sm'
            href={html_url}
            rel='noopener noreferrer'
            target='_blank'
            title='A repository link to this project'
          >
            <span
              className={`${GeistMono.className} text-xxs inline-flex items-center gap-0.5 hover:underline hover:underline-offset-2`}
            >
              {'View on GitHub'}
              <SquareArrowOutUpRight size={13} />
            </span>
          </a>
        ) : (
          <span className='text-neutral-400'>No live demo available</span>
        )}
      </div>
      <ul className='mt-2 flex max-h-8 flex-wrap gap-2 overflow-y-auto py-0.5 pr-2'>
        {topics.map(topic => (
          <li
            className='border border-neutral-700 px-2 py-1 text-xs text-neutral-200 capitalize shadow-xs transition-all duration-100'
            key={topic}
          >
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
