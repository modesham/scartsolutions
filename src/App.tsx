import './App.css'

type Card = {
  title: string
  description?: string
}

const navLinks = ['Home', 'Solutions', 'Scart One', 'About', 'Contact']

const trustItems = [
  '15+ Years Experience',
  'ERP Built In-House',
  'Maldives-Based Support',
  'Enterprise-Ready Solutions',
]

const solutions: Card[] = [
  {
    title: 'Business Software',
    description:
      'ERP, POS, reporting, and workflow systems built around real operating needs.',
  },
  {
    title: 'IT Infrastructure',
    description:
      'Reliable networks, servers, workstations, and business technology foundations.',
  },
  {
    title: 'Security Systems',
    description:
      'Practical surveillance, access, and protection systems for modern organizations.',
  },
  {
    title: 'Digital Solutions',
    description:
      'Custom tools, integrations, and platforms that connect teams and operations.',
  },
]

const scartOneFeatures = ['Inventory', 'POS', 'Purchasing', 'GST Reporting']

const reasons = [
  'Deep business workflow understanding',
  'Real-world implementation experience',
  'End-to-end technology expertise',
  'Reliable support',
]

const industries = [
  'Retail',
  'Wholesale',
  'Hardware',
  'Resorts',
  'Corporate',
  'Government',
]

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Scart Solutions home">
          <span className="brand-mark">S</span>
          <span>SCART SOLUTIONS</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
              {link}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Get in Touch
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Enterprise technology partner</p>
              <h1>Technology That Powers Business</h1>
              <p className="hero-subtitle">
                We build reliable business technology - from ERP software and
                POS systems to infrastructure, networking, and security
                solutions.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#solutions">
                  Explore Solutions
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Scart business technology dashboard">
              <div className="visual-panel visual-panel-main">
                <div className="panel-header">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="metric-row">
                  <div>
                    <span className="metric-label">Operations</span>
                    <strong>98.7%</strong>
                  </div>
                  <div>
                    <span className="metric-label">Sites</span>
                    <strong>24</strong>
                  </div>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="status-line">
                  <span>Inventory sync</span>
                  <strong>Live</strong>
                </div>
              </div>

              <div className="visual-panel visual-panel-small">
                <span className="metric-label">Scart One</span>
                <strong>ERP Core</strong>
                <p>Inventory, POS, purchasing, GST</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Scart credibility">
          <div className="section-inner trust-grid">
            {trustItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Solutions</p>
              <h2>Reliable technology across your business stack</h2>
              <p>
                Scart Solutions delivers software, infrastructure, and security
                capabilities with one implementation-minded team.
              </p>
            </div>

            <div className="card-grid four-column">
              {solutions.map((solution) => (
                <article className="premium-card" key={solution.title}>
                  <span className="card-icon" aria-hidden="true" />
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scart-one-section" id="scart-one">
          <div className="section-inner scart-one-grid">
            <div>
              <p className="eyebrow">Flagship platform</p>
              <h2>Meet Scart One</h2>
              <p>
                A modern ERP platform built for retail, wholesale,
                distribution, and growing businesses.
              </p>
            </div>

            <div className="feature-grid">
              {scartOneFeatures.map((feature) => (
                <article className="feature-card" key={feature}>
                  <span>{feature.slice(0, 2).toUpperCase()}</span>
                  <h3>{feature}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner split-section">
            <div className="section-heading compact">
              <p className="eyebrow">Why choose Scart</p>
              <h2>Built for real business environments</h2>
              <p>
                Enterprise technology only works when it respects operations,
                people, support, and the realities of implementation.
              </p>
            </div>

            <div className="reason-list">
              {reasons.map((reason) => (
                <div className="reason-item" key={reason}>
                  <span aria-hidden="true" />
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" aria-labelledby="industries-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Industries served</p>
              <h2 id="industries-title">Technology for teams that run every day</h2>
            </div>

            <div className="industry-grid">
              {industries.map((industry) => (
                <article className="industry-card" key={industry}>
                  {industry}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta" id="contact">
          <div className="section-inner cta-inner">
            <div>
              <p className="eyebrow">Start the conversation</p>
              <h2>Let's Build Something Reliable</h2>
            </div>
            <a className="button button-primary" href="mailto:info@scartsolutions.com">
              Contact Scart Solutions
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">S</span>
              <span>SCART SOLUTIONS</span>
            </a>
            <p>Scart Solutions Pvt Ltd</p>
          </div>

          <div>
            <h2>Quick Links</h2>
            <a href="#solutions">Solutions</a>
            <a href="#scart-one">Scart One</a>
            <a href="#about">About</a>
          </div>

          <div>
            <h2>Contact</h2>
            <a href="mailto:info@scartsolutions.com">info@scartsolutions.com</a>
            <p>Maldives-based enterprise support</p>
          </div>
        </div>
        <div className="section-inner copyright">
          Copyright (c) 2026 Scart Solutions Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
