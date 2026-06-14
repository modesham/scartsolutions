import './App.css'

type Card = {
  title: string
  description?: string
  icon?: string
}

const navLinks = ['Home', 'Solutions', 'Industries', 'Scart One', 'About', 'Contact']

const trustItems: Card[] = [
  {
    icon: '15',
    title: '15+ Years Experience',
    description: 'Established delivery across business-critical systems.',
  },
  {
    icon: 'ER',
    title: 'ERP Built In-House',
    description: 'Product ownership from design to implementation.',
  },
  {
    icon: 'MV',
    title: 'Maldives-Based Support',
    description: 'Local response for enterprise operations.',
  },
  {
    icon: 'EN',
    title: 'Enterprise-Ready Solutions',
    description: 'Built for reliability, scale, and supportability.',
  },
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

const differentiators: Card[] = [
  {
    icon: 'BW',
    title: 'Business Workflow Expertise',
    description:
      'We understand real retail, wholesale, and operational workflows.',
  },
  {
    icon: 'SB',
    title: 'Software Built In-House',
    description:
      'Scart One ERP is designed and built internally for real businesses.',
  },
  {
    icon: 'IS',
    title: 'Infrastructure + Software',
    description:
      'We provide both digital systems and physical infrastructure.',
  },
  {
    icon: 'LP',
    title: 'Long-Term Partnership',
    description:
      'We focus on reliability, support, and long-term value.',
  },
]

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
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-text">
            <span>SCART</span>
            <span>SOLUTIONS</span>
          </span>
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
              <h1>
                Technology That
                <span>Powers Business</span>
              </h1>
              <p className="hero-subtitle">
                Scart Solutions delivers enterprise-grade software,
                infrastructure, and security systems built to power modern
                businesses and institutions.
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
              <article className="trust-card" key={item.title}>
                <span className="trust-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
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

        <section className="section difference-section" aria-labelledby="difference-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Enterprise advantage</p>
              <h2 id="difference-title">Why Scart is Different</h2>
              <p>
                Most vendors install systems. We understand how businesses
                operate.
              </p>
            </div>

            <div className="card-grid four-column">
              {differentiators.map((item) => (
                <article className="premium-card difference-card" key={item.title}>
                  <span className="card-icon text-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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

        <section className="section muted-section" id="industries" aria-labelledby="industries-title">
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
            <a className="button button-primary" href="mailto:sales@scartsolutions.com">
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
              <span className="brand-text">
                <span>SCART</span>
                <span>SOLUTIONS</span>
              </span>
            </a>
            <p>Scart Solutions Private Limited</p>
          </div>

          <div>
            <h2>Quick Links</h2>
            <a href="#home">Home</a>
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#scart-one">Scart One</a>
            <a href="#about">About</a>
          </div>

          <div>
            <h2>Contact</h2>
            <a href="mailto:sales@scartsolutions.com">sales@scartsolutions.com</a>
            <a href="tel:+9607967680">+960 7967680</a>
            <p>V. Faskani, Sheikh Abdurahmaanu Magu, Vilimale, Maldives</p>
          </div>
        </div>
        <div className="section-inner copyright">
          Copyright (c) 2026 Scart Solutions Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
