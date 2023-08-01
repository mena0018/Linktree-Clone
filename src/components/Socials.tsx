import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Social } from '@/models';

const Socials: FC<{ socials: Social[] }> = ({ socials }) => {
  return (
    <div className='my-8 flex gap-4'>
      {socials.map((social) => (
        <Link
          href={social.url}
          key={social.id}
          target='_blank'
          rel='noreferrer'
          className='hover:scale-105 transition-all'
        >
          <Image alt={social.title} src={social.image} width={50} height={50} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
