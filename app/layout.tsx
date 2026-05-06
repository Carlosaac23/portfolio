import '@/app/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const { PORTFOLIO_URL } = process.env;

export const metadata: Metadata = {
  title: 'Carlos Acosta',
  description: 'Portfolio personal de proyectos y perfil profesional',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(PORTFOLIO_URL!),
  openGraph: {
    title: 'Carlos Acosta - Portfolio',
    description: 'Personal Portfolio',
    url: PORTFOLIO_URL,
    siteName: 'Carlos Acosta - Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Acosta - Portfolio',
    description: 'Personal Portfolio',
    creator: '@Carlosaac23',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='m-auto max-w-200 p-8' lang='en'>
      <body
        className={`${GeistSans.className} flex min-h-screen flex-col bg-(--background)`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
