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
    <html>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Carlos Acosta</title>

        <script
          src='https://cdn.jsdelivr.net/npm/htmx.org@2.0.10/dist/htmx.min.js'
          integrity='sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V'
          crossorigin='anonymous'
        ></script>

        <link rel='stylesheet' href='/static/reset.css' />
        <link rel='stylesheet' href='/static/style.css' />

        <script src='https://unpkg.com/lucide@1.27.0/dist/umd/lucide.js'></script>

        <script src='https://unpkg.com/lucide@1.27.0'></script>
      </head>

      <body>{children}</body>

      <script>lucide.createIcons();</script>
    </html>
  );
};

type HomeProps = {
  repos: Repo[];
};

function Home({ repos }: HomeProps) {
  return (
    <Layout>
      <Header />
      <Main />
      <Links />
      <Repos repos={repos} />
      <Footer />
    </Layout>
  );
}

app.get('/', async c => {
  const repos = await getRepos();

  return c.html(<Home repos={repos} />);
});

export default app;
