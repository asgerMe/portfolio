'use client';

import { useState } from 'react';
import { getVideoEmbedUrl, projects, projectSections, type Project } from './projects';

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const projectsById = new Map(projects.map((project) => [project.id, project]));

  const renderProject = (project: Project) => {
    const videoUrl = getVideoEmbedUrl(project);
    const isActive = activeProject === project.id;

    return <article className="project-item" key={project.id} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)} onFocus={() => setActiveProject(project.id)} onBlur={() => setActiveProject(null)}>
      <div className={`media-card ${project.tone}${isActive ? ' is-playing' : ''}`}>
        <a className="media-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} />
        {!project.localVideo && <img className="media-thumbnail" src={project.thumbnail} alt="" />}
        {isActive && videoUrl && <iframe className="video-embed" src={videoUrl} title={`${project.title} video preview`} allow="autoplay; fullscreen; picture-in-picture" />}
        {isActive && project.localVideo && <video className="media-thumbnail" src={project.localVideo} autoPlay muted loop playsInline preload="metadata" />}
        <div className="media-shade" aria-hidden="true" />
        <div className="media-card-top"><span>{project.id} / VFX</span></div>
        <div className="media-card-bottom"><p className="media-title">{project.title}</p></div>
      </div>
      <div className="project-caption"><p>{project.description}</p>{project.referenceUrl && <a className="project-reference" href={project.referenceUrl} target="_blank" rel="noreferrer">{project.referenceLabel ?? 'Read more'} ↗</a>}</div>
    </article>;
  };

  return <section className="work-section" id="work">
    <div className="section-heading media-heading"><div><p className="kicker">01 / Selected work</p><h2>Graphics,<br />physics &amp; tools.</h2></div><p className="grid-note">R&amp;D for Project Fantasy: GPU-based fluid and physics simulation, plus procedural pipelines and tooling in Houdini.</p></div>
    <div className="work-groups">{projectSections.map((section, index) => <section className="work-group" key={section.id} aria-labelledby={section.id}>
      <header className="work-group-heading"><span className="work-group-number">{String(index + 1).padStart(2, '0')}</span><h3 id={section.id}>{section.title}</h3><p>{section.description}</p></header>
      <div className="media-grid">{section.projectIds.map((id) => projectsById.get(id)).filter((project): project is Project => Boolean(project)).map(renderProject)}</div>
    </section>)}</div>
  </section>;
}
