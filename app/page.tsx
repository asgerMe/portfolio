import { ArrowUpRight } from 'lucide-react';
import { HeroCarousel } from './hero-carousel';
import { ProjectShowcase } from './project-showcase';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asger — home"><span className="brand-mark">A</span><span>ASGER.VFX</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="mailto:hello@example.com">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <HeroCarousel />

      <ProjectShowcase />

      <section className="about-section" id="about">
        <p className="kicker">02 / About</p>
        <div className="about-grid">
          <h2>Effects in motion.<br />Systems underneath.</h2>
          <div className="about-copy">
            <p>I work with real-time VFX, procedural systems, and computer graphics—shaping motion, atmosphere, and simulation into images that feel alive.</p>
            <p>This portfolio collects finished pieces, technical studies, and visual experiments across particles, volumetrics, rendering, and generative work.</p>
          </div>
        </div>
        <div className="capabilities" aria-label="Capabilities"><span>Real-time VFX</span><span>Procedural systems</span><span>Simulation</span><span>Rendering</span></div>
      </section>

      <footer>
        <div><p className="kicker">03 / Say hello</p><a className="big-link" href="mailto:hello@example.com">Let’s create<br />something striking <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
