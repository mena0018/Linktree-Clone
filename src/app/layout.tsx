import './globals.css';
import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://rabiemenad.fr'),
  robots: { index: true, follow: true },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  title: 'Rabie Menad • Links',
  applicationName: 'Rabie Menad',
  alternates: { canonical: 'https://rabiemenad.fr' },
  authors: [{ name: 'Rabie Menad', url: 'https://rabiemenad.fr' }],
  keywords: ['Rabie Menad', 'portfolio', 'développeur', 'react', 'front'],
  description:
    "Hello, moi c'est Rabie Menad et ici, je partagerai les liens de mes réseaux favoris ainsi que d'autres informations relatives à mon profil.",
  icons: [
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      type: 'image/png',
      sizes: '16x16',
      color: '#5bbad5',
      url: '/safari-pinned-tab.svg',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Rabie Menad • Links',
    siteName: 'Rabie Menad • Links',
    url: 'https://rabiemenad.fr',
    images: [{ url: 'https://ibb.co/pn2zRQJ' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veille_teck',
    creator: '@veille_teck',
    images: 'https://ibb.co/pn2zRQJ',
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='fr'>
      <head />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
