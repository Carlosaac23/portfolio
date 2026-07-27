import type { FC } from 'hono/jsx';

import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

import type { Repo } from './types/repo.js';

import Footer from './components/footer.js';
import Header from './components/header.js';
import Links from './components/links.js';
import Main from './components/main.js';
import Repos from './components/repos.js';
import { env } from './config/env.js';
import getRepos from './lib/github.js';

const app = new Hono();

const isDev = env.NODE_ENV === 'development';

app.use('/static/*', serveStatic({ root: './public' }));

const Layout: FC = ({ children }) => {
  return (
    <html>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Carlos Acosta</title>

        <link rel='stylesheet' href='/static/reset.css' />
        <link rel='stylesheet' href='/static/style.css' />

        {isDev ? (
          <script src='https://unpkg.com/lucide@latest/dist/umd/lucide.js'></script>
        ) : (
          <script src='https://unpkg.com/lucide@latest'></script>
        )}
      </head>

      <body>{children}</body>

      <script>lucide.createIcons()</script>
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
