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

export function getVimeoEmbedUrl(url: string) {
  const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];

  return videoId
    ? `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0`
    : null;
}
