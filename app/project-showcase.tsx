import { projects } from './projects';

export function ProjectShowcase() {
  return <section className="work-section" id="work">
    <div className="section-heading media-heading"><div><p className="kicker">01 / Selected work</p><h2>Graphics<br />&amp; VFX.</h2></div><p className="grid-note">Real-time effects, simulation, procedural studies, and moving-image experiments.</p></div>
    <div className="media-grid">{projects.map((project) => <article className={`media-card ${project.tone}`} key={project.id}>
      <img className="media-thumbnail" src={project.thumbnail} alt="" />
      <div className="media-shade" aria-hidden="true" />
      <div className="media-card-top"><span>{project.id} / VFX</span></div>
      <div className="media-card-bottom"><div><p className="media-title">{project.title}</p><p className="media-description">{project.description}</p></div></div>
    </article>)}</div>
  </section>;
}
