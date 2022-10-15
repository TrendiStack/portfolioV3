import img1 from "./assets/mockups/projectmockup.png";
import img2 from "./assets/mockups/smartbrainmockup.png";
import img3 from "./assets/mockups/moviemockup.png";
export const projectData = [
  {
    id: 1,
    name: "Travlr.",
    subtitle: "A travel app for the modern traveler.",
    fromAndTo: "August 2021 - August 2021",
    description:
      "Travlr. is a application that allow you to plan your trips day by day with your friends and family  and save the best memories from that trip",
    image: img1,
    link: "https://picsum.photos/200/300",
    github: "https://picsum.photos/200/300",
    tech: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "Express",
      },
      {
        id: 4,
        name: "MongoDB",
      },
    ],
  },
  {
    id: 2,
    name: "Smartbrain",
    subtitle: "A face recognition app.",
    fromAndTo: "August 2021 - August 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc et nunc. ",
    image: img2,
    link: "https://react-smartbrain-app.vercel.app/",
    github: "https://github.com/UziStacks/react-smartbrain-app",

    tech: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Sass",
      },
      {
        id: 3,
        name: "Express",
      },
      {
        id: 4,
        name: "Postgres",
      },
    ],
  },
  {
    id: 3,
    name: "MovieApp",
    subtitle: "A movie app for the modern moviegoer.",
    fromAndTo: "August 2021 - August 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc et nunc.",
    image: img3,
    link: "https://next-movie-app-five.vercel.app/",
    github: "https://github.com/UziStacks/next-movie-app",
    tech: [
      {
        id: 1,
        name: "Next",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "Firebase",
      },
    ],
  },
];
