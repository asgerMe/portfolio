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
          <article className="experience-item"><p className="experience-company io">IO</p><div><h3>Software Engineer</h3><p className="experience-organization">IO Interactive · Full-time</p><p className="experience-period">Jan 2021 — Present</p><p>Copenhagen, Denmark</p></div></article>
          <article className="experience-item"><p className="experience-company">INDEPENDENT</p><div><h3>Software Engineer</h3><p className="experience-organization">Freelance · Self-employed</p><p className="experience-period">Jan 2019 — Aug 2022</p><p>Designed cloud-based Bayesian travel-time inference methods used by Denmark’s largest mobile-car-washing provider.</p></div></article>
          <article className="experience-item"><p className="experience-company">UNIVERSITY OF<br />COPENHAGEN</p><div><h3>PhD Scholar</h3><p className="experience-period">Jun 2016 — Jun 2019</p><p>Copenhagen, Denmark</p></div></article>
          <article className="experience-item"><p className="experience-company">HARVARD<br />UNIVERSITY</p><div><h3>PhD Student</h3><p className="experience-period">Feb 2019 — May 2019</p><p>Studied deep-learning-based physics simulation in the Boston area.</p></div></article>
          <article className="experience-item"><p className="experience-company">D60</p><div><h3>Graphic Designer</h3><p className="experience-period">Sep 2014 — Sep 2015</p><p>Aarhus, Denmark</p></div></article>
          <p className="experience-divider">Education</p>
          <article className="experience-item"><p className="experience-company">AARHUS<br />UNIVERSITY</p><div><h3>Master&apos;s Degree, Geophysics</h3><p className="experience-period">2013 — 2016</p></div></article>
          <article className="experience-item"><p className="experience-company">AARHUS<br />UNIVERSITY</p><div><h3>Bachelor&apos;s Degree, Nanoscience</h3><p className="experience-period">2009 — 2013</p></div></article>
        </div>
      </section>

      <footer>
        <div><p className="kicker">04 / Contact</p><a className="big-link" href="mailto:hello@example.com">Contact <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
