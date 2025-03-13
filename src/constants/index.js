import {
  frontend,
  backend,
  projectmanage,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  python,
  java,
  packettracer,
  mysql,
  flask,
  esei,
  dnd,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Desarollador Frontend',
    icon: frontend,
  },
  {
    title: 'Desarollador Backend',
    icon: backend,
  },
  {
    title: 'Gestion de proyectos',
    icon: projectmanage,
  },
  {
    title: 'Prototipado de Software',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'PacketTracer',
    icon: packettracer,
  },
  {
    name: 'mySQL',
    icon: mysql,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'Java',
    icon: java,
  },
];

const experiences = [
  {
    title: 'Estudiande de grado en Ingenieria Informatica',
    company_name: 'Escola Superior de Enxenaria Informatica',
    icon: esei,
    iconBg: '#333333',
    date: 'Sept 2021 - Junio   2026',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'GestionesyMazmorras',
    description: 'Un sistema de gestión para jugadores y masters del juego D&D',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'green-text-gradient',
      },
      {
        name: 'redis',
        color: 'pink-text-gradient',
      },
    ],
    image: dnd,
    repo: 'https://github.com/MrCaride/DND_CampaignManager',
    demo: 'https://github.com/MrCaride/DND_CampaignManager',
  },
];

export { services, technologies, experiences, projects };
