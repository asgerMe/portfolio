'use client';

import { useState } from 'react';
import { getVideoEmbedUrl, projects, projectSections, type Project } from './projects';

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const projectsById = new Map(projects.map((project) => [project.id, project]));

  const renderProject = (project: Project) => {
    const videoUrl = getVideoEmbedUrl(project);
    const isActive = activeProject === project.id;

    return <a className={`media-card ${project.tone}${project.textCard ? ' text-card' : ''}`} key={project.id} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)} onFocus={() => setActiveProject(project.id)} onBlur={() => setActiveProject(null)}>
      {!project.textCard && !project.localVideo && <img className="media-thumbnail" src={project.thumbnail} alt="" />}
      {!project.textCard && isActive && videoUrl && <iframe className="video-embed" src={videoUrl} title={`${project.title} video preview`} allow="autoplay; fullscreen; picture-in-picture" />}
      {!project.textCard && isActive && project.localVideo && <video className="media-thumbnail" src={project.localVideo} autoPlay muted loop playsInline preload="metadata" />}
      <div className="media-shade" aria-hidden="true" />
      <div className="media-card-top"><span>{project.id} / {project.textCard ? 'YOUTUBE' : 'VFX'}</span></div>
      <div className="media-card-bottom"><div><p className="media-title">{project.title}</p><p className="media-description">{project.description}</p></div></div>
    </a>;
  };

  return <section className="work-section" id="work">
    <div className="section-heading media-heading"><div><p className="kicker">01 / Selected work</p><h2>Graphics<br />&amp; VFX.</h2></div><p className="grid-note">Real-time effects, simulation, procedural studies, and moving-image experiments.</p></div>
    <div className="work-groups">{projectSections.map((section) => <section className="work-group" key={section.id} aria-labelledby={section.id}>
      <h3 id={section.id}>{section.title}</h3>
      <div className="media-grid">{section.projectIds.map((id) => projectsById.get(id)).filter((project): project is Project => Boolean(project)).map(renderProject)}</div>
    </section>)}</div>
  </section>;
}
