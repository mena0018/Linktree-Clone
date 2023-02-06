import { v4 as uuidv4 } from 'uuid';

import Logo from '/public/images/profile/logo.webp';
import Avatar from '/public/images/profile/avatar.png';
import Profil from '/public/images/profile/profil_black.jpg';

import Linkedin from '/public/images/icon/linkedin.svg';
import Instagram from '/public/images/icon/instagram.svg';
import Discord from '/public/images/icon/discord.svg';
import Github from '/public/images/icon/github.svg';

export const data = {
  name: 'Menad Rabie',
  avatar: Profil,
  links: [
    {
      id: uuidv4(),
      title: 'Site personnel',
      url: 'https://rabie-menad.vercel.app',
      image: Logo,
    },
    {
      id: uuidv4(),
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/rabie-menad/',
      image: Linkedin,
    },
    {
      id: uuidv4(),
      title: 'FrontEndMentor',
      url: 'https://www.frontendmentor.io/profile/mena0018',
      image: Avatar,
    },
  ],
  socials: [
    {
      id: uuidv4(),
      title: 'Instagram',
      url: 'https://instagram.com/crocop_09',
      image: Instagram,
    },
    {
      id: uuidv4(),
      title: 'Github',
      url: 'https://github.com/mena0018',
      image: Github,
    },
    {
      id: uuidv4(),
      title: 'Discord',
      url: 'https://discord.com/users/750695863214407809',
      image: Discord,
    },
  ],
};
