import { FC } from 'react';
import { data } from '../data/index';
import LinkCard from '@/components/LinkCard';

const Links: FC = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      {data.links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </section>
  );
};

export default Links;
