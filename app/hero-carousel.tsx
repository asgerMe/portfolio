import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';
import { projects } from './projects';

export function HeroCarousel() {
  const project = projects.find((item) => item.featured) ?? projects[0];
  return <section className="flagship" id="top">
    <img className="flagship-image" src={project.thumbnail} alt="" />
    <div className="flagship-shade" aria-hidden="true" />
    <div className="flagship-top"><p><span className="pulse" /> Featured work</p><a href="#work">See all work <ArrowDownRight size={17} /></a></div>
    <a className="flagship-caption" href={project.url} target="_blank" rel="noreferrer" aria-label={`Watch ${project.title} on Vimeo`}><span className="flagship-label">{project.id} / VIDEO <Play size={13} fill="currentColor" /></span><h1>{project.title}</h1><p>{project.description}</p><span className="watch-link">Watch on Vimeo <ArrowUpRight size={18} /></span></a>
  </section>;
}
