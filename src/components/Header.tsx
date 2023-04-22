import { FC } from 'react';
import { data } from '@/data';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className='w-full flex flex-col items-center'>
      <Image priority src={data.avatar} alt='avatar' className='w-24 h-24 rounded-full' />
      <h1 className='font-bold text-white tracking-wide text-2xl mt-4 mb-8'>{data.name}</h1>
    </header>
  );
};

export default Header;
