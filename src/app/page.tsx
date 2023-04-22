import { FC } from 'react';
import Links from '@/components/Links';
import Header from '@/components/Header';
import Socials from '@/components/Socials';

const Home: FC = () => {
  return (
    <main className='h-full flex flex-col items-center pt-16 px-8'>
      <Header />
      <Links />
      <Socials />
    </main>
  );
};

export default Home;
