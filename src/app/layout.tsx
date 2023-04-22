import './globals.css';
import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Rabie Menad • Links',
  description:
    "Liens de mes réseaux favoris tels que Twitter ou Discord ainsi que d'autres information relatives à mon profil.",
  icons: [
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
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://rabiemenad.fr',
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
