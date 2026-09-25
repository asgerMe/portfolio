import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ProjectShowcase } from './project-showcase';

export default function Home() {
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

      <ProjectShowcase />

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
