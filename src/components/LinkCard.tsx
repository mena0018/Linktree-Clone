import { FC } from 'react';
import { Link } from '@/models/index';
import Image from 'next/image';

const LinkCard: FC<Omit<Link, 'id'>> = ({ image, url, title }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='w-full max-w-3xl bg-gray-100 flex gap-4 items-center p-3 rounded-md hover:scale-105 transition-all mb-3 border border-slate-200'
    >
      {image && <Image src={image} alt='logo' width={38} height={38} className='absolute' />}
      <h2 className='text-slate-700 font-semibold w-full flex justify-center'>{title}</h2>
    </a>
  );
};

export default LinkCard;
