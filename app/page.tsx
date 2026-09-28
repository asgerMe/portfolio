import { ArrowUpRight } from 'lucide-react';
import { HeroCarousel } from './hero-carousel';
import { ProjectShowcase } from './project-showcase';
import { experienceContent, mainBarContent, publicationsContent } from './projects';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${mainBarContent.brand} home`}><span>{mainBarContent.brand}</span></a>
        <nav aria-label="Main navigation">
          {mainBarContent.items.map((item) => <a href={item.href} key={`${item.href}-${item.label}`}>{item.label}{item.externalIcon && <ArrowUpRight size={15} />}</a>)}
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
          {experienceContent.items.map((item, index) => item.divider ? <p className="experience-divider" key={`divider-${index}`}>{item.divider}</p> : <article className="experience-item" key={`${item.company}-${item.role}`}><p className={`experience-company${item.logo ? ' io' : ''}`}>{item.logo ? <img src={item.logo} alt={item.logoAlt ?? item.company ?? ''} /> : item.company}</p><div><h3>{item.role}</h3>{item.organization && <p className="experience-organization">{item.organization}</p>}{item.period && <p className="experience-period">{item.period}</p>}{item.details?.map((detail) => <p key={detail}>{detail}</p>)}</div></article>)}
        </div>
      </section>

      <section className="publications-section" id="publications">
        <p className="kicker">04 / Publications</p>
        <div className="publications-heading"><h2>{publicationsContent.title}</h2><p>{publicationsContent.description}</p></div>
        <div className="publications-list">
          {publicationsContent.items.map((publication) => <a className="publication-item" href={publication.url} target="_blank" rel="noreferrer" key={publication.url}><span className="publication-type">{publication.type}</span><span className="publication-title">{publication.title}</span><span className="publication-action">Read ↗</span></a>)}
          {false && <>
          <a className="publication-item" href="https://drive.google.com/file/d/0B16UYreWAOhYbThRUDFuWW5JYU0/view?usp=sharing&amp;resourcekey=0-bVqe1s9LFYtJLnymlbh7EQ" target="_blank" rel="noreferrer"><span className="publication-type">Master thesis</span><span className="publication-title">Semi-Implicit Material Point Method</span><span className="publication-action">Read ↗</span></a>
          <a className="publication-item" href="https://graphicsinterface.org/wp-content/uploads/gi2022-10.pdf" target="_blank" rel="noreferrer"><span className="publication-type">Paper · Graphics Interface 2022</span><span className="publication-title">Fast Vortex Particle Method for Fluid-Character Interaction</span><span className="publication-action">Read ↗</span></a>
          </>}
        </div>
      </section>

      <footer>
        <div><p className="kicker">05 / Contact</p><a className="big-link" href="mailto:hello@example.com">Contact <ArrowUpRight /></a></div>
        <div className="footer-bottom"><p>© 2026 Asger</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>
    </main>
  );
}
