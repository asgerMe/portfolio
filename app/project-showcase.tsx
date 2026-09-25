'use client';

import { useState } from 'react';
import { Asterisk } from 'lucide-react';

type Project = { index: string; title: string; kind: string; year: string; status: string; category: 'Web' | 'Tools' | 'Experiments'; tone: string };

const projects: Project[] = [
  { index: '01', title: 'Your next flagship project', kind: 'Product / Case study', year: '2026', status: 'Add your work', category: 'Web', tone: 'tone-cobalt' },
  { index: '02', title: 'A useful little tool', kind: 'Utility / Open source', year: '2026', status: 'In the works', category: 'Tools', tone: 'tone-lime' },
  { index: '03', title: 'An idea worth testing', kind: 'Prototype / Lab note', year: '2026', status: 'Experiment', category: 'Experiments', tone: 'tone-violet' },
];

const filters = ['All', 'Web', 'Tools', 'Experiments'] as const;

export function ProjectShowcase() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
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
  );
}
