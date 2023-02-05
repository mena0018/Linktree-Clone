import { Link } from '@/types/index';
import Image from 'next/image';

export default function LinkCard({ image, url, title }: Omit<Link, 'id'>) {
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
}
