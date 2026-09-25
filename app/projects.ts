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
  hero?: boolean;
  textCard?: boolean;
  start?: number;
  end?: number;
};

export type ProjectSection = {
  id: string;
  title: string;
  projectIds: string[];
};

const projectContent = content as { projects: Project[]; sections: ProjectSection[] };

export const projects = projectContent.projects;
export const projectSections = projectContent.sections;

export function getVideoEmbedUrl(project: Project) {
  const { url, start, end } = project;
  const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];

  if (videoId) return `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0`;

  const youtubeId = url.match(/[?&]v=([^&]+)/)?.[1] ?? url.match(/youtu\.be\/([^?&/]+)/)?.[1];
  if (!youtubeId) return null;

  const timing = new URLSearchParams({ autoplay: '1', mute: '1', controls: '0', loop: '1', playlist: youtubeId, playsinline: '1', rel: '0' });
  if (start !== undefined) timing.set('start', String(start));
  if (end !== undefined) timing.set('end', String(end));
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${timing}`;
}
