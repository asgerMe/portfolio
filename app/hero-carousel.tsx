import { ArrowDownRight } from 'lucide-react';
import { projects } from './projects';

export function HeroCarousel() {
  const project = projects.find((item) => item.featured) ?? projects[0];
  return <section className="flagship" id="top">
    <img className="flagship-image" src={project.thumbnail} alt="" />
    <div className="flagship-shade" aria-hidden="true" />
    <div className="flagship-top"><p><span className="pulse" /> Featured work</p><a href="#work">See all work <ArrowDownRight size={17} /></a></div>
    <div className="flagship-caption"><span className="flagship-label">{project.id} / FEATURED VFX</span><h1>{project.title}</h1><p>{project.description}</p></div>
  </section>;
}
