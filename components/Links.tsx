import { SquareArrowOutUpRight } from 'lucide-react';

import { links } from '@/lib/links';

export default function Links() {
  return (
    <div className='mb-6 flex gap-3 lg:gap-4'>
      {links.map(link => (
        <a
          className='text-sm text-(--gray) hover:text-(--foreground)'
          key={link.label}
          href={link.url}
          rel='noopener noreferre'
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
