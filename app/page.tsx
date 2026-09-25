'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react';

type Project = { index: string; title: string; kind: string; year: string; status: string; category: 'Web' | 'Tools' | 'Experiments'; tone: string };

const projects: Project[] = [
  { index: '01', title: 'Your next flagship project', kind: 'Product / Case study', year: '2026', status: 'Add your work', category: 'Web', tone: 'tone-cobalt' },
  { index: '02', title: 'A useful little tool', kind: 'Utility / Open source', year: '2026', status: 'In the works', category: 'Tools', tone: 'tone-lime' },
  { index: '03', title: 'An idea worth testing', kind: 'Prototype / Lab note', year: '2026', status: 'Experiment', category: 'Experiments', tone: 'tone-violet' },
];
const filters = ['All', 'Web', 'Tools', 'Experiments'] as const;

export default function Home() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asger — home"><span className="brand-mark">A</span><span>ASGER.DEV</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="mailto:hello@example.com">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow"><span className="pulse" /> Available for interesting work</p>
        <h1>I build things<br />for the <span>web</span>.</h1>
        <div className="hero-bottom">
          <p className="intro">Developer and maker turning rough ideas into thoughtful digital products. This is where the good ones live.</p>
          <a className="scroll-link" href="#work">Selected work <ArrowDownRight size={20} /></a>
        </div>
        <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><p className="kicker">01 / Selected work</p><h2>Things I’ve made</h2></div>
          <div className="filters" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} className={active === filter ? 'active' : ''} onClick={() => setActive(filter)}>{filter}</button>)}
          </div>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.index}>
              <div className={`project-visual ${project.tone}`}>
                <span className="media-label">YOUR IMAGE / VIDEO</span><span className="project-number">{project.index}</span><Asterisk className="asterisk" size={34} strokeWidth={1.4} />
              </div>
              <div className="project-meta">
                <div><h3>{project.title}</h3><p>{project.kind}</p></div>
                <div className="project-side"><span>{project.status}</span><span>{project.year}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="kicker">02 / About</p>
        <div className="about-grid">
          <h2>Curious by default.<br />Always building.</h2>
          <div className="about-copy">
            <p>I care about the small decisions that make an idea feel obvious to use. My work sits somewhere between code, product thinking and visual craft.</p>
            <p>This page is the starting point. As each new thing ships, it gets a place here — the polished work, the useful tools, and the experiments that taught me something.</p>
          </div>
        </div>
        <div className="capabilities" aria-label="Capabilities"><span>Product development</span><span>Frontend</span><span>Creative coding</span><span>Prototyping</span></div>
      </section>

      <footer>
        <div><p className="kicker">03 / Say hello</p><a className="big-link" href="mailto:hello@example.com">Let’s make<br />something <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
