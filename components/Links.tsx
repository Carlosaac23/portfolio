import { SquareArrowOutUpRight } from 'lucide-react';

import { links } from '@/lib/links';

export default function Links() {
  return (
    <div className='mb-6 flex flex-wrap gap-3 lg:gap-4'>
      <a
        className='text-sm text-(--gray) hover:text-(--foreground)'
        href='https://x.com/Carlosaac23'
        rel='noopener noreferrer'
        target='_blank'
        title='A link to my twitter account'
      >
        <span className='inline-flex items-center gap-1'>
          X <del>(aka Twitter)</del>
          <SquareArrowOutUpRight size={13} />
        </span>
      </a>
      {links.map(link => (
        <a
          className='text-sm text-(--gray) hover:text-(--foreground)'
          key={link.label}
          href={link.url}
          rel='noopener noreferrer'
          target='_blank'
          title={link.title}
        >
          <span className='inline-flex items-center gap-1'>
            {link.label}
            <SquareArrowOutUpRight size={13} />
          </span>
        </a>
      ))}
    </div>
  );
}
