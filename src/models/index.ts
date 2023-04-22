import { StaticImageData } from 'next/image';

export type Link = {
  id: string;
  title: string;
  url: string;
  image: StaticImageData;
};

export type Data = {
  name: string;
  avatar: StaticImageData;
  links: Link[];
  socials: Link[];
};
