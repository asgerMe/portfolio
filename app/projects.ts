import content from '../content/projects.json';

export type Project = {
  id: string;
  title: string;
  format: 'Video';
  tone: string;
  url: string;
  thumbnail: string;
  description: string;
  featured: boolean;
};

export const projects = content as Project[];
