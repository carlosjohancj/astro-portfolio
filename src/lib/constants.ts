import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/carlosjohancj',
  linkedin: 'https://www.linkedin.com/in/carlos-johan-montilva-moreno-b30436236/',
  mail: 'carlosjohancj@hotmail.com',
  instagram: 'https://www.instagram.com/carlosjohan_cj/',
 // medium: 'https://ladvace.medium.com/',
 // discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
  DESCRIPTION: 'Proyectos y trabajos recientes.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: '...',
    institution: 'Claseflix',
    link: 'https://claseflix.com/',
    date: '2024 - 2024',
  },
  {
    title: '...',
    institution: 'Ingeniería Digital',
    link: 'https://www.cubiwelt.com/',
    date: '2021 - 2022',
  },

  {
    title: '...',
    institution: 'Platzi',
    link: 'https://www.platzi.com/',
    date: '2021 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@soydalto',
    date: '2022 - 2024',
  },

  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@HolaMundoDev',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@mouredev',
    date: '2022 - 2024',
  },]

export const EXPERIENCE = [
  {
    company: 'Cripto Flight Manager',
    location: 'Caracas, Venezuela',
    position: 'Frontend Developer',
    start: '2020',
    link: '/cripto/',
    end: '2022',
    tasks: [
      'Integration Web3 services with javascript and html',
      'Development and build of web page with Js, Html, Css',
    ],
  },
  {
    company: 'Gobernacion del Estado Táchira',
    location: 'San Cristobal, Venezuela',
    position: 'Software Engineer',
    link: 'https://www.tachira.gob.ve/',
    start: '2022',
    end: '2023',
    tasks: [
      'Mantenimiento y actualizacion de base de datos y codigo del sistema sirta con php y postgresql',
      'Apoyo en el desarrollo del sistema de asistencia de personal con php y mysql',
      'Planificacion y desarrollo del sistema de recaudacion tributaria (no culminado por motivo de renuncia)',
      'apoyo logistico y de mantenimiento en diferentes sistemas y base de datos con mis compañeros de area',
    ],
  },
  {
    company: 'Freelance',
    link: '/',
    location: 'San Cristobal, Venezuela',
    position: 'Web Developer and Graphic Desing',
    start: '2023',
    end: 'Current',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
]
