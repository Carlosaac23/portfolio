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

const siteTitle = 'Carlos Acosta | Self-taught Developer';
const siteDescription =
  'Self-taught developer based in Colombia, building useful software through full-stack development and working toward AI engineering. Explore my projects and get in touch.';
const siteUrl = 'https://www.carlosaac23.me/';
const socialImage = `${siteUrl}static/og-image.png`;
const socialImageAlt =
  'Carlos Acosta — self-taught developer based in Colombia. Full-stack development, with a growing focus on AI.';

const Layout: FC = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{siteTitle}</title>

        <meta name='description' content={siteDescription} />
        <link rel='canonical' href={siteUrl} />

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
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:image' content={socialImage} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={socialImageAlt} />
        <meta property='og:site_name' content='Carlos Acosta' />

        {/* <!-- Twitter --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={socialImage} />
        <meta name='twitter:image:alt' content={socialImageAlt} />

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
