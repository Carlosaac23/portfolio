import '@/app/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Carlos Acosta',
  description: 'Portfolio personal de proyectos y perfil profesional',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://portfolio-steel-kappa-78.vercel.app/'),
  openGraph: {
    title: 'Carlos Acosta - Portfolio',
    description: 'Personal Portfolio',
    url: 'https://portfolio-steel-kappa-78.vercel.app/',
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
        className={`${GeistMono.className} flex min-h-screen flex-col bg-neutral-950`}
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
