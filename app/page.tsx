import LinkCard from '@/components/LinkCard';
import Image from 'next/image';
import { data } from 'src/data';

export default function Home() {
  const links = data.links.map((link) => <LinkCard key={link.id} {...link} />);

  return (
    <main className='flex flex-col justify-center items-center mt-16'>
      <Image
        src={data.avatar}
        alt='avatar'
        width={96}
        height={96}
        className='aspect-square object-cover rounded-full'
      />

      <h1 className='font-bold text-xl mt-4 mb-8'>{data.name}</h1>
      {links}
    </main>
  );
}
