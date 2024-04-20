import { Project } from './model/project.interface';
import { Skill } from './model/skill.interface';

export const appSkills: Skill[] = [
  {
    title: 'HTML',
    experience: '4 years experience',
  },
  {
    title: 'CSS',
    experience: '4 years experience',
  },
  {
    title: 'Javascript',
    experience: '4 years experience',
  },
  {
    title: 'Accessbility',
    experience: '4 years experience',
  },
  {
    title: 'React',
    experience: '3 years experience',
  },
  {
    title: 'Sass',
    experience: '3 years experience',
  },
];

export const appProjects: Project[] = [
  {
    title: 'design portfolio',
    technologies: ['HTML', 'CSS'],
    photo: {
      large: 'thumbnail-project-1-large.webp',
      small: 'thumbnail-project-1-small.webp',
    },
  },
  {
    title: 'e-learning landing page',
    technologies: ['HTML', 'CSS'],
    photo: {
      large: 'thumbnail-project-2-large.webp',
      small: 'thumbnail-project-2-small.webp',
    },
  },
  {
    title: 'todo web app',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    photo: {
      large: 'thumbnail-project-3-large.webp',
      small: 'thumbnail-project-3-small.webp',
    },
  },
  {
    title: 'entertainment web app',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    photo: {
      large: 'thumbnail-project-4-large.webp',
      small: 'thumbnail-project-4-small.webp',
    },
  },
  {
    title: 'memory game',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    photo: {
      large: 'thumbnail-project-5-large.webp',
      small: 'thumbnail-project-5-small.webp',
    },
  },
  {
    title: 'art gallery showcase',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    photo: {
      large: 'thumbnail-project-6-large.webp',
      small: 'thumbnail-project-6-small.webp',
    },
  },
];
