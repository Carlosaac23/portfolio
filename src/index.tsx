import type { FC } from 'hono/jsx';

import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

import type { Repo } from './types/repo.js';

import Footer from './components/footer.js';
import Header from './components/header.js';
import Links from './components/links.js';
import Main from './components/main.js';
import Repos from './components/repos.js';
import getRepos from './lib/github.js';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './public' }));

const Layout: FC = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Carlos Acosta</title>

        <meta
          name='description'
          content='Portfolio of Carlos Acosta, a Full Stack Developer from Colombia. Explore projects, technical skills, and open-source work.'
        />

        <meta
          name='keywords'
          content='Carlos Acosta, Full Stack Developer, Software Engineer, TypeScript, JavaScript, React, Go, Node.js, Hono, HTMX, Portfolio'
        />

        <meta name='author' content='Carlos Acosta' />
        <meta name='robots' content='index, follow' />

        {/* <!-- Theme --> */}
        <meta name='theme-color' content='#0a0a0a' />
        <meta name='color-scheme' content='dark' />

        {/* <!-- Open Graph --> */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Carlos Acosta' />
        <meta
          property='og:description'
          content='Portfolio showcasing projects, technical skills, and open-source work.'
        />
        <meta property='og:url' content='https://www.carlosaac23.me/' />
        <meta property='og:image' content='https://www.carlosaac23.me/static/profile.webp' />
        <meta property='og:site_name' content='Carlos Acosta' />

        {/* <!-- Twitter --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Carlos Acosta' />
        <meta
          name='twitter:description'
          content='Portfolio showcasing projects, technical skills, and open-source work.'
        />
        <meta name='twitter:image' content='https://www.carlosaac23.me/static/profile.webp' />

        <link rel='stylesheet' href='/static/reset.css' />
        <link rel='stylesheet' href='/static/style.css' />
      </head>
      <body>{children}</body>
    </html>
  );
};

type PortfolioProps = {
  repos: Repo[];
};

function Portfolio({ repos }: PortfolioProps) {
  return (
    <Layout>
      <main>
        <Header />
        <Main />
        <Links />
        <Repos repos={repos} />
        <Footer />
      </main>
    </Layout>
  );
}

app.get('/', async c => {
  const repos = await getRepos();

  return c.html('<!DOCTYPE html>' + <Portfolio repos={repos} />);
});

export default app;
