import { FaGithub } from "react-icons/fa6";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  nextjs,
  hoobank,
  nft,
  tipvault,
  portfolio,
  github,
  apple,
} from "../assets";
import {
  FaLaptopCode,
  FaSearch,
  FaTools,
  FaProjectDiagram,
  FaRocket,
  FaGit,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: "starbucks",
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: "tesla",
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: "shopify",
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: "meta",
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const projects = [
  {
    id: 1,
    title: "NFT Site",
    desc: "Explore and manage NFTs with a sleek and user-friendly interface. Built with the latest web technologies.",
    img: nft,
    iconLists: [reactjs, tailwind, javascript],
    live_url: "https://nft-ten-kohl.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/NFT",
  },
  {
    id: 2,
    title: "Bank Site",
    desc: "A secure and efficient banking application featuring account management, transactions, and more.",
    img: hoobank,
    iconLists: [reactjs, tailwind, javascript],
    live_url: "https://hoo-bank-lilac.vercel.app/",
    git_link: "https://github.com/your-username/bank-site",
  },
  {
    id: 3,
    title: "TipVault",
    desc: "A platform for sharing and discovering programming tips categorized by language. Built with React and TypeScript.",
    img: tipvault,
    iconLists: [reactjs, tailwind, typescript],
    live_url: "https://tipvault.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/tipvault",
  },
  {
    id: 4,
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my projects, skills, and experiences. Designed to reflect my style and expertise.",
    img: portfolio,
    iconLists: [nextjs, tailwind, typescript, firebase],
    live_url: "https://github.com/your-username/portfolio-website",
    git_link: "https://github.com/Dubby-Bantin/portfolio",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    desc: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: apple,
    iconLists: [nextjs, tailwind, typescript, firebase],
    live_url: "https://github.com/your-username/portfolio-website",
    git_link: "https://github.com/Dubby-Bantin/portfolio",
  },
];

const approachSteps = [
  {
    title: "Research & Learning",
    description:
      "I believe in starting every project with a strong foundation. I invest time in thorough research and learning, often exploring multiple resources...",
    Icon: FaSearch,
  },
  {
    title: "Planning & Strategy",
    description:
      "Next, I create a detailed plan and strategy. This phase involves setting goals, defining milestones, and ensuring that the project is aligned with the overall vision.",
    Icon: FaProjectDiagram,
  },
  {
    title: "Design & Development",
    description:
      "During this phase, I focus on the creative and technical aspects of the project. This involves designing user interfaces, writing code, and building the core functionalities.",
    Icon: FaLaptopCode,
  },
  {
    title: "Testing & Optimization",
    description:
      "After development, I rigorously test the project to identify any bugs and optimize the project for the best performance.",
    Icon: FaTools,
  },
  {
    title: "Launch & Monitoring",
    description:
      "Finally, I launch the project and monitor its performance. I also gather feedback and make necessary adjustments to ensure continued success.",
    Icon: FaRocket,
  },
];

const socialMedia = [
  {
    id: 1,
    Icon: FaGithub,
  },
  {
    id: 2,
    Icon: FaWhatsapp,
  },
  {
    id: 3,
    Icon: FaLinkedin,
  },
];

export { technologies, projects, approachSteps, socialMedia };
