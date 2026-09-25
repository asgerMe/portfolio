'use client';

import { ArrowDownRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getVideoEmbedUrl, projects } from './projects';

export function HeroCarousel() {
  const heroProjects = projects.filter((item) => item.hero);
  const cycle = heroProjects.length ? heroProjects : projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const project = cycle[activeIndex % cycle.length];
  const videoUrl = getVideoEmbedUrl(project);

  useEffect(() => {
    if (cycle.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % cycle.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [cycle.length]);

  return <section className="flagship" id="top">
    <img className={`flagship-image${videoUrl ? ' has-video' : ''}`} src={project.thumbnail} alt="" />
    {videoUrl && <iframe key={project.id} className="video-embed" src={videoUrl} title={`${project.title} video`} allow="autoplay; fullscreen; picture-in-picture" />}
    <div className="flagship-shade" aria-hidden="true" />
    <div className="flagship-top"><p><span className="pulse" /> Featured work</p><a href="#work">See all work <ArrowDownRight size={17} /></a></div>
    <div className="flagship-caption"><p className="flagship-label">VFX ARTIST / MOTION DESIGNER</p><h1>ASGER <em>MELDGAARD</em></h1><p className="flagship-role">Creating graphics, simulations, and visual effects for moving images.</p><p className="flagship-project">Currently showing / {project.title}</p></div>
  </section>;
}
