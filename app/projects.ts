export type Project = { id: string; title: string; format: 'Image' | 'Video'; tone: string };

export const projects: Project[] = [
  { id: '01', title: 'Flagship project', format: 'Image', tone: 'tone-cobalt' },
  { id: '02', title: 'Useful little tool', format: 'Video', tone: 'tone-lime' },
  { id: '03', title: 'Idea worth testing', format: 'Image', tone: 'tone-violet' },
  { id: '04', title: 'A thing in progress', format: 'Video', tone: 'tone-orange' },
  { id: '05', title: 'Side experiment', format: 'Image', tone: 'tone-sky' },
  { id: '06', title: 'Next up', format: 'Image', tone: 'tone-pink' },
];
