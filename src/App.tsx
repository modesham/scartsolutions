import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import {
  ArrowRight,
  Building2,
  Hotel,
  Menu,
  Package,
  ShoppingCart,
  Wrench,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import scartLogo from './assets/Scart-Logo.svg'
import './App.css'

type Card = {
  title: string
  description?: string
  icon?: string
}

type BadgeIconName =
  | 'award'
  | 'code'
  | 'support'
  | 'enterprise'
  | 'workflow'
  | 'network'
  | 'partnership'

type IconCard = Card & {
  icon: BadgeIconName
}

type ModuleIconName = 'inventory' | 'pos' | 'purchasing' | 'gst'

type ScartOneFeature = {
  title: string
  icon: ModuleIconName
}

type SolutionIconName = 'software' | 'infrastructure' | 'security' | 'digital'

type SolutionCard = Card & {
  icon: SolutionIconName
}

type IndustryCard = {
  title: string
  Icon: LucideIcon
}

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Solutions', href: '#solutions', id: 'solutions' },
  { label: 'Industries', href: '#industries', id: 'industries' },
  { label: 'Scart One', href: '#scart-one', id: 'scart-one' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const trustItems: IconCard[] = [
  {
    icon: 'award',
    title: '15+ Years Experience',
    description: 'Established delivery across business-critical systems.',
  },
  {
    icon: 'code',
    title: 'ERP Built In-House',
    description: 'Product ownership from design to implementation.',
  },
  {
    icon: 'support',
    title: 'Maldives-Based Support',
    description: 'Local response for enterprise operations.',
  },
  {
    icon: 'enterprise',
    title: 'Enterprise-Ready Solutions',
    description: 'Built for reliability, scale, and supportability.',
  },
]

const solutions: SolutionCard[] = [
  {
    icon: 'software',
    title: 'Business Software',
    description:
      'ERP, POS, reporting, and workflow systems built around real operating needs.',
  },
  {
    icon: 'infrastructure',
    title: 'IT Infrastructure',
    description:
      'Reliable networks, servers, workstations, and business technology foundations.',
  },
  {
    icon: 'security',
    title: 'Security Systems',
    description:
      'Practical surveillance, access, and protection systems for modern organizations.',
  },
  {
    icon: 'digital',
    title: 'Digital Solutions',
    description:
      'Custom tools, integrations, and platforms that connect teams and operations.',
  },
]

const scartOneFeatures: ScartOneFeature[] = [
  { title: 'Inventory', icon: 'inventory' },
  { title: 'POS', icon: 'pos' },
  { title: 'Purchasing', icon: 'purchasing' },
  { title: 'GST Reporting', icon: 'gst' },
]

const differentiators: IconCard[] = [
  {
    icon: 'workflow',
    title: 'Business Workflow Expertise',
    description:
      'We understand real retail, wholesale, and operational workflows.',
  },
  {
    icon: 'code',
    title: 'Software Built In-House',
    description:
      'Scart One ERP is designed and built internally for real businesses.',
  },
  {
    icon: 'network',
    title: 'Infrastructure + Software',
    description:
      'We provide both digital systems and physical infrastructure.',
  },
  {
    icon: 'partnership',
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

const industries: IndustryCard[] = [
  { title: 'Retail', Icon: ShoppingCart },
  { title: 'Wholesale', Icon: Package },
  { title: 'Hardware', Icon: Wrench },
  { title: 'Resorts', Icon: Hotel },
  { title: 'Corporate', Icon: Building2 },
]

const sectionIds = ['home', 'solutions', 'industries', 'scart-one', 'about', 'contact']

function ModuleIcon({ icon }: { icon: ModuleIconName }) {
  if (icon === 'inventory') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3.5 7.25 8.5-4 8.5 4-8.5 4-8.5-4Z" />
        <path d="M3.5 7.25v9.5l8.5 4 8.5-4v-9.5" />
        <path d="M12 11.25v9.5" />
      </svg>
    )
  }

  if (icon === 'pos') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.75h10a1.5 1.5 0 0 1 1.5 1.5v15l-2-1.1-2 1.1-2-1.1-2 1.1-2-1.1-2 1.1v-15A1.5 1.5 0 0 1 7 3.75Z" />
        <path d="M9 8h6" />
        <path d="M9 11.5h6" />
        <path d="M9 15h3.25" />
      </svg>
    )
  }

  if (icon === 'purchasing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 6.5h13l-1.2 7.25H7L5.5 6.5Z" />
        <path d="M5.5 6.5 5 4H3.5" />
        <path d="M8.25 18.5h.01" />
        <path d="M16.25 18.5h.01" />
        <path d="M8.25 18.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path d="M16.25 18.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.75h7.5L18 7.25v13H7a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 7 3.75Z" />
      <path d="M14.5 3.75v3.5H18" />
      <path d="M8.75 11h6.5" />
      <path d="M8.75 14.25h6.5" />
      <path d="M8.75 17.5h3.25" />
    </svg>
  )
}

function SolutionIcon({ icon }: { icon: SolutionIconName }) {
  if (icon === 'software') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5h16v13H4v-13Z" />
        <path d="M4 9h16" />
        <path d="M8 13h3" />
        <path d="M14 13h2" />
        <path d="M8 16h8" />
      </svg>
    )
  }

  if (icon === 'infrastructure') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 4.5h11v5h-11v-5Z" />
        <path d="M6.5 14.5h11v5h-11v-5Z" />
        <path d="M9 7h.01" />
        <path d="M9 17h.01" />
        <path d="M12 9.5v5" />
      </svg>
    )
  }

  if (icon === 'security') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75 18.5 6v5.2c0 4.2-2.55 7.35-6.5 9.05-3.95-1.7-6.5-4.85-6.5-9.05V6L12 3.75Z" />
        <path d="m9.25 12.1 1.85 1.85 3.9-4.15" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5.5-2 13" />
    </svg>
  )
}

function BadgeIcon({ icon }: { icon: BadgeIconName }) {
  if (icon === 'award') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 14.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" />
        <path d="m9.25 13.45-.9 6.8L12 18.1l3.65 2.15-.9-6.8" />
        <path d="m9.85 9.55 1.25 1.25 3.05-3.2" />
      </svg>
    )
  }

  if (icon === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
        <path d="m13 5.5-2 13" />
      </svg>
    )
  }

  if (icon === 'support') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 12a7.5 7.5 0 0 1 15 0" />
        <path d="M4.5 12.25v3.25a2 2 0 0 0 2 2h1v-6h-1a2 2 0 0 0-2 2Z" />
        <path d="M19.5 12.25v3.25a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
        <path d="M16.5 17.5c0 1.25-1.6 2.25-3.6 2.25H12" />
      </svg>
    )
  }

  if (icon === 'enterprise') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 20.25V4.75h9v15.5" />
        <path d="M14.5 9.25h4v11" />
        <path d="M8.25 8h.01" />
        <path d="M11.75 8h.01" />
        <path d="M8.25 11.5h.01" />
        <path d="M11.75 11.5h.01" />
        <path d="M8.25 15h.01" />
        <path d="M11.75 15h.01" />
        <path d="M4 20.25h16" />
      </svg>
    )
  }

  if (icon === 'workflow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 7.5h4v4h-4v-4Z" />
        <path d="M13.5 12.5h4v4h-4v-4Z" />
        <path d="M10.5 9.5h1.75A2.75 2.75 0 0 1 15 12.25v.25" />
        <path d="M8.5 11.5v2.25A2.75 2.75 0 0 0 11.25 16.5h2.25" />
      </svg>
    )
  }

  if (icon === 'network') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path d="M6.5 15.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path d="M17.5 15.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path d="m10.7 9.05-3.05 6.3" />
        <path d="m13.3 9.05 3.05 6.3" />
        <path d="M8.75 17.5h6.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.25 12.75 10 15.5a2.4 2.4 0 0 0 3.4 0l3.35-3.35a2.15 2.15 0 0 0-3.05-3.04L12 10.8l-1.7-1.7a2.15 2.15 0 0 0-3.05 3.05Z" />
      <path d="m4.5 13.4 4.2 4.2a4.7 4.7 0 0 0 6.6 0l4.2-4.2" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35
      let current = 'home'

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (section && section.offsetTop <= scrollPosition) {
          current = id
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20

      setActiveSection(nearBottom ? 'contact' : current)
    }

    let animationFrame = 0
    const requestActiveSectionUpdate = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true })
    window.addEventListener('resize', requestActiveSectionUpdate)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestActiveSectionUpdate)
      window.removeEventListener('resize', requestActiveSectionUpdate)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault()
    setIsMenuOpen(false)
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="navbar-inner">
          <a className="brand" href="#home" aria-label="Scart Solutions home">
            <img
              className="brand-logo"
              src={scartLogo}
              alt="Scart Solutions"
              width="2048"
              height="1152"
            />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                className={link.id === activeSection ? 'active' : undefined}
                key={link.href}
                href={link.href}
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-drawer-shell${isMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="drawer-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <aside className="mobile-drawer" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="drawer-header">
            <span>Menu</span>
            <button
              className="drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>

          <nav className="drawer-links" aria-label="Mobile navigation links">
            {navLinks.map((link) => (
              <a
                className={link.id === activeSection ? 'active' : undefined}
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <main>
        <section className="hero-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Enterprise technology partner</p>
              <h1 className="hero-title">
                Technology That
                <span>
                  Powers <strong>Business</strong>
                </span>
              </h1>
              <p className="hero-subtitle">
                Scart Solutions delivers enterprise-grade software,
                infrastructure, and security systems built to power modern
                businesses and institutions.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button btn button-primary" href="#solutions">
                  Explore Solutions
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Scart business technology dashboard">
              <div className="visual-panel visual-panel-main dashboard-mockup hero-dashboard">
                <div className="panel-header">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="metric-row">
                  <div>
                    <span className="metric-label">Operations</span>
                    <span className="metric-value">
                      <strong>98.7%</strong>
                      <span className="sparkline" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="metric-label">Sites</span>
                    <span className="metric-value">
                      <strong>24</strong>
                      <span className="sparkline violet" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="chart-wrap" aria-hidden="true">
                  <div className="chart-axis">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  <div className="chart-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="status-line">
                  <span><i aria-hidden="true" />Inventory sync</span>
                  <strong>Live</strong>
                </div>
              </div>

              <div className="visual-panel visual-panel-small erp-floating-card hero-erp-card">
                <span className="erp-badge" aria-hidden="true">
                  <ModuleIcon icon="inventory" />
                </span>
                <div>
                  <span className="metric-label">Scart One</span>
                  <strong>ERP Core</strong>
                  <p>Inventory, POS, purchasing, GST</p>
                </div>
                <ArrowRight className="erp-arrow" size={26} strokeWidth={2.1} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Scart credibility">
          <div className="section-inner trust-grid">
            {trustItems.map((item) => (
              <article className="trust-card" key={item.title}>
                <span className="trust-icon" aria-hidden="true">
                  <BadgeIcon icon={item.icon} />
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
                  <span className="card-icon" aria-hidden="true">
                    <SolutionIcon icon={solution.icon} />
                  </span>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
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
              {industries.map(({ title, Icon }) => (
                <article className="industry-card" key={title}>
                  <span className="industry-icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
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
                <article className="feature-card" key={feature.title}>
                  <span className="feature-icon" aria-hidden="true">
                    <ModuleIcon icon={feature.icon} />
                  </span>
                  <h3>{feature.title}</h3>
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
                  <span className="card-icon soft-icon" aria-hidden="true">
                    <BadgeIcon icon={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta" id="contact">
          <div className="section-inner cta-inner">
            <div>
              <p className="eyebrow">Start the conversation</p>
              <h2>Powering Businesses with Technology That Works</h2>
              <p>Software, infrastructure, and support designed for real operations.</p>
            </div>
            <a className="button button-primary" href="mailto:sales@scartsolutions.com">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <img
                className="brand-logo footer-logo"
                src={scartLogo}
                alt="Scart Solutions"
                width="2048"
                height="1152"
              />
            </a>
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
