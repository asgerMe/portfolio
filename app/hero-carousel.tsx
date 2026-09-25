'use client';

import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { projects } from './projects';

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 4200); return () => window.clearInterval(timer); }, []);
  const project = projects[active];
  return <section className="hero" id="top">
    <div className="hero-copy"><p className="eyebrow"><span className="pulse" /> Available for interesting work</p><h1>I build things<br />for the <span>web</span>.</h1><div className="hero-bottom"><p className="intro">Developer and maker turning rough ideas into thoughtful digital products. This is where the good ones live.</p><a className="scroll-link" href="#work">Selected work <ArrowDownRight size={20} /></a></div></div>
    <div className={`hero-preview ${project.tone}`}>
      <div className="preview-art" aria-hidden="true"><span className="preview-orb" /><span className="preview-sheet" /></div>
      <div className="preview-top"><span>FEATURED / {project.id}</span><span>{project.format === 'Video' ? <Play size={13} fill="currentColor" /> : 'IMAGE'}</span></div>
      <div className="preview-bottom"><div><p>Now showing</p><h2>{project.title}</h2></div><ArrowUpRight size={23} /></div>
      <div className="preview-dots" aria-label="Featured projects">{projects.map((item, index) => <button key={item.id} onClick={() => setActive(index)} className={index === active ? 'active' : ''} aria-label={`Show ${item.title}`} />)}</div>
    </div>
  </section>;
}
