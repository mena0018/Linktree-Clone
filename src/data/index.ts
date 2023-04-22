import { Data } from '@/models';
import { v4 as uuidv4 } from 'uuid';

import Logo from '/public/images/profile/logo.webp';
import Avatar from '/public/images/profile/avatar.png';
import Profil from '/public/images/profile/profil_black.jpg';

import LinkedIn from '/public/images/icon/linkedin.svg';
import Twitter from '/public/images/icon/twitter.svg';
import Discord from '/public/images/icon/discord.svg';
import Github from '/public/images/icon/github.svg';

export const data: Data = {
  name: 'Rabie Menad',
  avatar: Profil,
  links: [
    {
      id: uuidv4(),
      title: 'Portfolio',
      url: 'https://rabie-menad.vercel.app',
      image: Logo,
    },
    {
      id: uuidv4(),
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rabie-menad/',
      image: LinkedIn,
    },
    {
      id: uuidv4(),
      title: 'Freelancing',
      url: 'https://www.malt.fr/profile/rabiemenad',
      image: Avatar,
    },
  ],
  socials: [
    {
      id: uuidv4(),
      title: 'Github',
      url: 'https://github.com/mena0018',
      image: Github,
    },
    {
      id: uuidv4(),
      title: 'Twitter',
      url: 'https://twitter.com/veille_teck',
      image: Twitter,
    },
    {
      id: uuidv4(),
      title: 'Discord',
      url: 'https://discord.com/users/750695863214407809',
      image: Discord,
    },
  ],
};
