import { StaticImageData } from 'next/image';

export type Data = {
  name: string;
  avatar: StaticImageData;
  links: Link[];
  socials: Social[];
};

export type Link = {
  id: number;
  title: string;
  url: string;
  image: StaticImageData;
};

export type Social = Link;
