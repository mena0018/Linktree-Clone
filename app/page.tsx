import LinkCard from '@/components/LinkCard';
import Image from 'next/image';
import Link from 'next/link';
import { data } from 'src/data';

export default function Home() {
  const links = data.links.map((link) => <LinkCard key={link.id} {...link} />);

  const socials = data.socials.map((social) => (
    <Link
      href={social.url}
      key={social.id}
      target='_blank'
      rel='noreferrer'
      className='hover:scale-105 transition-all'
    >
      <Image alt={social.title} src={social.image} width={50} height={50} />
    </Link>
  ));

  return (
    <main className='h-full flex flex-col items-center pt-16 px-8'>
      <Image src={data.avatar} alt='avatar' priority className='w-24 h-24 rounded-full' />

      <h1 className='font-bold text-white tracking-wide text-2xl mt-4 mb-8'>{data.name}</h1>
      {links}
      <div className='my-8 flex gap-4'>{socials}</div>
    </main>
  );
}
