import { ArrowUpRight } from 'lucide-react';
import { HeroCarousel } from './hero-carousel';
import { ProjectShowcase } from './project-showcase';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asger — home"><span>ASGER MELDGAARD</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Portfolio</a><a href="#about">About</a><a href="mailto:hello@example.com">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <HeroCarousel />

      <ProjectShowcase />

      <section className="about-section" id="about">
        <p className="kicker">02 / About</p>
        <div className="about-grid">
          <h2>About</h2>
          <div className="about-copy">
            <p>Graphics and VFX work by Asger Meldgaard.</p>
            <p>Add a short bio, role, software, and contact details here.</p>
          </div>
        </div>
        <div className="capabilities" aria-label="Capabilities"><span>Motion</span><span>Simulation</span><span>Real-time</span><span>Compositing</span></div>
      </section>

      <footer>
        <div><p className="kicker">03 / Contact</p><a className="big-link" href="mailto:hello@example.com">Contact <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
