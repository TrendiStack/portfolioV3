import yccImg from './assets/mockups/yccmockup.png';
import avantImg from './assets/mockups/avantmockup.png';
import pv3Img from './assets/mockups/projectmockup.png';

import avantgif from './assets/gifs/avant/avant gif.gif';
import yccgif from './assets/gifs/yourcasaconcierge/ycc.gif';
import pv3gif from './assets/gifs/portfoliov3/pv3.gif';

export const projectData = [
  {
    id: 1,
    name: 'Your Casa Concierge',
    subtitle: 'Full service home rental concierge service',
    fromAndTo: 'November 2022 - Present',
    description: 'Landing page for a concierge service',
    image: yccImg,
    gif: yccgif,
    link: 'https://www.yourcasaconcierge.com/',
    github: 'https://github.com/UziStacks/yourcasaconcierge',
    tech: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 3,
        name: 'Sanity',
      },
    ],
  },
  {
    id: 2,
    name: 'AVANT',
    subtitle: "Men's Fashion E-commerce",
    fromAndTo: 'December 2022 - Present',
    description: 'This is a Full-stack e-commerce web application',
    image: avantImg,
    gif: avantgif,
    link: 'https://avant-fullstack.vercel.app/',
    github: 'https://github.com/UziStacks/avant-fullstack',
    tech: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 3,
        name: 'Express',
      },
      {
        id: 4,
        name: 'MongoDB',
      },
    ],
  },
  {
    id: 3,
    name: 'PortfolioV3',
    subtitle: 'My Portfolio',
    fromAndTo: 'July 2021 - Present',
    description: 'This is my portfolio website',
    image: pv3Img,
    gif: pv3gif,
    link: 'https://www.terel-phillips.ca/',
    github: 'https://github.com/UziStacks/portfolioV3',

    tech: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Tailwind',
      },
      {
        id: 3,
        name: 'Framer-motion',
      },
    ],
  },
];
