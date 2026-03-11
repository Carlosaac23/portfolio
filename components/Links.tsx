import { Mail, SquareArrowOutUpRight } from 'lucide-react';

export default function Links() {
  return (
    <div className='mb-6 flex gap-3 lg:gap-4'>
      <a
        className='text-sm text-neutral-400 hover:text-neutral-50'
        href='https://x.com/Carlosaac23'
        rel='noopener noreferrer'
        target='_blank'
        title='A link to my X account'
      >
        <span className='inline-flex items-center gap-1 hover:underline hover:underline-offset-2'>
          X
          <SquareArrowOutUpRight size={13} />
        </span>
      </a>

      <a
        className='text-sm text-neutral-400 hover:text-neutral-50'
        href='https://github.com/Carlosaac23'
        rel='noopener noreferrer'
        target='_blank'
        title='A link to my GitHub'
      >
        <span className='inline-flex items-center gap-1 hover:underline hover:underline-offset-2'>
          GitHub
          <SquareArrowOutUpRight size={13} />
        </span>
      </a>

      <a
        className='text-sm text-neutral-400 hover:text-neutral-50'
        href='https://www.linkedin.com/in/carlos-acosta-7aa448263/'
        rel='noopener noreferrer'
        target='_blank'
        title='A link to my Linkedin'
      >
        <span className='inline-flex items-center gap-1 hover:underline hover:underline-offset-2'>
          LinkedIn
          <SquareArrowOutUpRight size={13} />
        </span>
      </a>

      <a
        className='text-sm text-neutral-400 hover:text-neutral-50'
        href='mailto:carlosaac232001@gmail.com'
        title='A link to send me an email'
      >
        <span className='inline-flex items-center gap-1 hover:underline hover:underline-offset-2'>
          Write me
          <Mail size={15} />
        </span>
      </a>
    </div>
  );
}
