import { ArrowUpRight } from 'lucide-react';
import { HeroCarousel } from './hero-carousel';
import { ProjectShowcase } from './project-showcase';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asger — home"><span>ASGER MELDGAARD</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Portfolio</a><a href="#experience">Experience</a><a href="#about">About</a><a href="mailto:hello@example.com">Contact <ArrowUpRight size={15} /></a>
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

      <section className="experience-section" id="experience">
        <div className="experience-heading"><p className="kicker">03 / Experience</p><h2>Experience.</h2></div>
        <div className="experience-list">
          <article className="experience-item"><p className="experience-company">CD PROJEKT RED</p><div><h3>Lead &amp; Senior Technical Artist</h3><p className="experience-period">Sep 2025 — Present</p><p>Leading the Technical Art team on an unannounced project.</p></div></article>
          <article className="experience-item"><p className="experience-company io">IO</p><div><h3>Lead &amp; Senior Technical Artist</h3><p className="experience-period">Jan 2025 — Sep 2025</p><p>Led the Technical Art and VFX team on Project Fantasy.</p></div></article>
          <article className="experience-item"><p className="experience-company">BLACKBIRD<br />INTERACTIVE</p><div><h3>Technical Artist</h3><p className="experience-period">Mar 2021 — Oct 2024</p><p>Built pipelines, shaders, real-time effects, procedural tools, and rendering systems across game development projects.</p></div></article>
        </div>
      </section>

      <footer>
        <div><p className="kicker">04 / Contact</p><a className="big-link" href="mailto:hello@example.com">Contact <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
