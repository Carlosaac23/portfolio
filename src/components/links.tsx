import { links } from '../lib/links.js';
import ExternalLinkIcon from './external-link.js';

export default function Links() {
  return (
    <section id='links'>
      {links.map(link => (
        <a
          class='links__link'
          key={link.label}
          href={link.url}
          rel='noopener noreferrer'
          target='_blank'
          title={link.title}
        >
          <span class='links__link-span'>
            {link.label} {link.suffix && <del>{link.suffix} </del>}
            <ExternalLinkIcon />
          </span>
        </a>
      ))}
    </section>
  );
}
