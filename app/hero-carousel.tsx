'use client';

import { ArrowDownRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getVideoEmbedUrl, projects } from './projects';

export function HeroCarousel() {
  const cycle = projects.filter((item) => item.hero);
  const [activeIndex, setActiveIndex] = useState(0);
  const project = cycle[activeIndex % cycle.length];
  const videoUrl = getVideoEmbedUrl(project);
  const showNext = () => setActiveIndex((index) => (index + 1) % cycle.length);

  useEffect(() => {
    if (cycle.length < 2) return;

    const handlePlayerEvent = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com' && event.origin !== 'https://www.youtube-nocookie.com') return;
      let data = event.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch { return; }
      }
      if (data?.event === 'finish' || (data?.event === 'onStateChange' && data.info === 0)) showNext();
    };

    window.addEventListener('message', handlePlayerEvent);
    return () => window.removeEventListener('message', handlePlayerEvent);
  }, [cycle.length]);

  return <section className="flagship" id="top">
    <img className={`flagship-image${videoUrl ? ' has-video' : ''}`} src={project.thumbnail} alt="" />
    {videoUrl && <iframe key={project.id} className="video-embed" src={videoUrl} title={`${project.title} video`} allow="autoplay; fullscreen; picture-in-picture" onLoad={(event) => event.currentTarget.contentWindow?.postMessage({ method: 'addEventListener', value: 'finish' }, 'https://player.vimeo.com')} />}
    {!videoUrl && project.localVideo && <video key={project.id} className="video-embed" src={project.localVideo} autoPlay muted playsInline onEnded={showNext} />}
    <div className="flagship-shade" aria-hidden="true" />
    <div className="flagship-top"><p><span className="pulse" /> Featured work</p><a href="#work">See all work <ArrowDownRight size={17} /></a></div>
    <div className="flagship-caption">
      <p className="flagship-label">VFX artist / programmer / physics</p>
      <h1>ASGER<br /><em>MELDGAARD</em></h1>
      <p className="flagship-role">I build VFX, simulations, and tools.</p>
      <p className="flagship-project">Currently showing / {project.title}</p>
    </div>
  </section>;
}
