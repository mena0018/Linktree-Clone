import { FC } from 'react';
import { Metadata } from 'next';
import { data } from 'src/data';
import Image from 'next/image';
import Socials from '@/components/Socials';
import LinkCard from '@/components/LinkCard';

export const metadata: Metadata = {
  title: 'Rabie Menad • Links',
  description:
    'Retrouver les liens de mes réseaux favoris Instagram, Github, Twitter et autres avec Rabie Menad Links, le site de partage de liens.',
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
};

const Home: FC = () => {
  return (
    <main className='h-full flex flex-col items-center pt-16 px-8'>
      <Image priority src={data.avatar} alt='avatar' className='w-24 h-24 rounded-full' />

      <h1 className='font-bold text-white tracking-wide text-2xl mt-4 mb-8'>{data.name}</h1>

      {data.links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}

      <Socials socials={data.socials} />
    </main>
  );
};

export default Home;
