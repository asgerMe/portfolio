import { ArrowUpRight, Play } from 'lucide-react';
import { projects } from './projects';

export function ProjectShowcase() {
  return <section className="work-section" id="work">
    <div className="section-heading media-heading"><div><p className="kicker">01 / Selected work</p><h2>A few things<br />I’ve made.</h2></div><p className="grid-note">A living index of projects, experiments and work in progress.</p></div>
    <div className="media-grid">{projects.map((project) => <a className={`media-card ${project.tone}`} href={project.url} target="_blank" rel="noreferrer" key={project.id} aria-label={`Watch ${project.title} on Vimeo`}>
      <img className="media-thumbnail" src={project.thumbnail} alt="" />
      <div className="media-shade" aria-hidden="true" />
      <div className="media-card-top"><span>{project.id}</span><span><Play size={13} fill="currentColor" /></span></div>
      <div className="media-card-bottom"><span>{project.title}</span><ArrowUpRight size={17} /></div>
    </a>)}</div>
  </section>;
}
