import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import {
  ArrowRight,
  ChartNoAxesCombined,
  ChartColumnIncreasing,
  Building2,
  Database,
  Files,
  Hotel,
  Mail,
  MapPin,
  Menu,
  Moon,
  Package,
  Phone,
  ShoppingCart,
  ShieldCheck,
  Sun,
  Wrench,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import admiralMockup from './assets/admiral-mockup.png'
import admiralPage01 from './assets/portfolio/admiral-holdings/page-01.webp'
import admiralPage02 from './assets/portfolio/admiral-holdings/page-02.webp'
import admiralPage03 from './assets/portfolio/admiral-holdings/page-03.webp'
import admiralPage04 from './assets/portfolio/admiral-holdings/page-04.webp'
import goidhooPage01 from './assets/portfolio/goidhoo-excursions/page-01.webp'
import goidhooPage02 from './assets/portfolio/goidhoo-excursions/page-02.webp'
import goidhooPage03 from './assets/portfolio/goidhoo-excursions/page-03.webp'
import goidhooPage04 from './assets/portfolio/goidhoo-excursions/page-04.webp'
import goidhooMockup from './assets/goidhoo-mockup.png'
import scartPage01 from './assets/portfolio/scart-solutions/page-01.webp'
import scartPage02 from './assets/portfolio/scart-solutions/page-02.webp'
import scartPage03 from './assets/portfolio/scart-solutions/page-03.webp'
import scartPage04 from './assets/portfolio/scart-solutions/page-04.webp'
import scartMockup from './assets/scart-mockup.png'
import scartLogoDark from './assets/Logo_Dark.png'
import scartLogoWhite from './assets/Logo_White.png'
import scartHubDark from './assets/Scart-Slogo-White.png'
import scartHubLight from './assets/Scart-Slogo-dark.png'
import './App.css'

const PortfolioProjectModal = lazy(() => import('./PortfolioProjectModal'))

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

type SiteTheme = 'dark' | 'light'

const themeStorageKey = 'scart-solutions-theme'

type SolutionIconName = 'software' | 'infrastructure' | 'security' | 'digital'

type SolutionCard = Card & {
  icon: SolutionIconName
}

type IndustryCard = {
  title: string
  Icon: LucideIcon
}

type FeaturedProject = {
  title: string
  category: string
  description: string
  imageSrc: string
  imageAlt: string
  pages: string[]
}

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Solutions', href: '#solutions', id: 'solutions' },
  { label: 'Industries', href: '#industries', id: 'industries' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Products', href: '#products', id: 'products' },
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
    title: 'Products Built In-House',
    description: 'Designed, developed, and supported by Scart Solutions.',
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

const scartOneCapabilities = ['Inventory', 'POS', 'Purchasing', 'GST Reporting']

const scartFilesCapabilities = [
  'Structured Filing',
  'Verification',
  'Multi-Company',
  'Reports',
  'Audit Trail',
  'Secure Cloud Storage',
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
      'Our software products are designed and built internally for real businesses.',
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

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Admiral Holdings',
    category: 'Corporate Identity',
    description:
      'A complete corporate identity system including logo, business card, letterhead, corporate seal, and company profile design.',
    imageSrc: admiralMockup,
    imageAlt:
      'Admiral Holdings corporate identity mockup with logo, business card, letterhead, and stationery.',
    pages: [admiralPage01, admiralPage02, admiralPage03, admiralPage04],
  },
  {
    title: 'Goidhoo Excursions and Tours',
    category: 'Tourism Branding',
    description:
      'Tourism-focused branding, promotional design, and apparel developed for excursion and marine activities.',
    imageSrc: goidhooMockup,
    imageAlt:
      'Goidhoo Excursions and Tours tourism branding mockup with apparel and promotional poster design.',
    pages: [goidhooPage01, goidhooPage02, goidhooPage03, goidhooPage04],
  },
  {
    title: 'Scart Solutions',
    category: 'IN-HOUSE BRAND IDENTITY',
    description:
      'Corporate identity and stationery developed for Scart Solutions’ own professional technology brand.',
    imageSrc: scartMockup,
    imageAlt:
      'Scart Solutions corporate brand mockup with logo, stationery, business card, and branded mug.',
    pages: [scartPage01, scartPage02, scartPage03, scartPage04],
  },
]

const sectionIds = [
  'home',
  'solutions',
  'industries',
  'work',
  'products',
  'about',
  'contact',
]

function getStoredTheme(): SiteTheme | null {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey)
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null
  } catch {
    return null
  }
}

function getInitialSiteTheme(): SiteTheme {
  const documentTheme = document.documentElement.dataset.theme

  if (documentTheme === 'dark' || documentTheme === 'light') {
    return documentTheme
  }

  return getStoredTheme() ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

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

function CapabilityTags({ items }: { items: string[] }) {
  return (
    <ul className="capability-tags" aria-label="Product capabilities">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [siteTheme, setSiteTheme] = useState<SiteTheme>(getInitialSiteTheme)
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null)
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        setSiteTheme(event.matches ? 'dark' : 'light')
      }
    }

    colorSchemeQuery.addEventListener('change', followSystemTheme)

    return () => {
      colorSchemeQuery.removeEventListener('change', followSystemTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = siteTheme
    document.documentElement.style.colorScheme = siteTheme
  }, [siteTheme])

  const scartLogo = siteTheme === 'dark' ? scartLogoWhite : scartLogoDark
  const scartHubLogo = siteTheme === 'dark' ? scartHubDark : scartHubLight

  const handleThemeToggle = () => {
    setSiteTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem(themeStorageKey, nextTheme)
      } catch {
        // Theme switching still works when storage is unavailable.
      }

      return nextTheme
    })
  }

  useEffect(() => {
    const targetId = window.location.hash.slice(1)

    if (!targetId) {
      return
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId)

      if (!target) {
        return
      }

      const previousScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'
      target.scrollIntoView({ block: 'start' })
      document.documentElement.style.scrollBehavior = previousScrollBehavior
    })
  }, [])

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
    const wasMenuOpen = isMenuOpen
    setIsMenuOpen(false)
    setActiveSection(sectionId)

    const scrollToSection = () => {
      window.history.replaceState(null, '', `#${sectionId}`)
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    if (wasMenuOpen) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToSection)
      })
      return
    }

    scrollToSection()
  }

  const handleProjectOpen = (
    event: MouseEvent<HTMLButtonElement>,
    project: FeaturedProject,
  ) => {
    projectTriggerRef.current = event.currentTarget
    setSelectedProject(project)
  }

  const handleProjectClose = () => {
    setSelectedProject(null)
    window.setTimeout(() => {
      projectTriggerRef.current?.focus()
      projectTriggerRef.current = null
    }, 0)
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
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${siteTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${siteTheme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={handleThemeToggle}
          >
            {siteTheme === 'dark' ? (
              <Sun size={19} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Moon size={19} strokeWidth={2} aria-hidden="true" />
            )}
          </button>

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
                <span>Technology</span>
                <span>That</span>
                <span>Powers</span>
                <strong>Business</strong>
              </h1>
              <p className="hero-subtitle">
                Scart Solutions builds business software and delivers the
                infrastructure and security that keep modern organizations
                moving.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button btn button-primary" href="#solutions">
                  Explore Solutions
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </a>
                <a className="button hero-secondary-cta" href="#products">
                  View Products
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Scart Solutions connected product ecosystem">
              <div className="hero-mockup-artboard">
                <div className="hero-product-system">
                  <div className="hero-system-header">
                    <strong>Scart Solutions Products</strong>
                    <div>
                      <span><i aria-hidden="true" />Designed and built in-house</span>
                      <b>2 Platforms</b>
                    </div>
                  </div>

                  <div className="hero-product-modules">
                    <article className="hero-product-module hero-product-module-one">
                      <span className="hero-product-icon" aria-hidden="true">
                        <ModuleIcon icon="inventory" />
                      </span>
                      <div>
                        <span className="hero-product-kicker">Scart One</span>
                        <strong>ERP Platform</strong>
                        <p>Inventory · POS · Purchasing · GST</p>
                      </div>
                    </article>

                    <article className="hero-product-module hero-product-module-files">
                      <span className="hero-product-icon hero-product-icon-files" aria-hidden="true">
                        <Files />
                      </span>
                      <div>
                        <span className="hero-product-kicker">Scart Files</span>
                        <strong>Multi-Entity Document Platform</strong>
                        <p>Structured Filing · Verification · Reports · Audit</p>
                      </div>
                    </article>
                  </div>

                  <div className="hero-ecosystem-map">
                    <svg className="hero-ecosystem-connections" viewBox="0 0 820 390" aria-hidden="true">
                      <path d="M206 66h112c40 0 34 72 76 96" />
                      <path d="M198 193h108c36 0 46 4 86 13" />
                      <path d="M294 354c44-48 54-96 101-116" />
                      <path d="M616 66h-104c-40 0-38 70-78 96" />
                      <path d="M636 193H530c-42 0-52 5-94 13" />
                      <path d="M586 350c-46-44-54-92-150-112" />
                      <circle cx="318" cy="66" r="4" />
                      <circle cx="306" cy="193" r="4" />
                      <circle cx="294" cy="354" r="4" />
                      <circle cx="512" cy="66" r="4" />
                      <circle cx="530" cy="193" r="4" />
                      <circle cx="586" cy="350" r="4" />
                    </svg>

                    <div className="hero-capability-node hero-capability-operations">
                      <span aria-hidden="true"><Package /></span>
                      <div><strong>Operations</strong><small>Streamline day-to-day business operations</small></div>
                    </div>
                    <div className="hero-capability-node hero-capability-documents">
                      <span aria-hidden="true"><Files /></span>
                      <div><strong>Documents</strong><small>Organize, verify and manage documents</small></div>
                    </div>
                    <div className="hero-capability-node hero-capability-infrastructure">
                      <span aria-hidden="true"><Database /></span>
                      <div><strong>Infrastructure</strong><small>Reliable, secure and scalable infrastructure</small></div>
                    </div>
                    <div className="hero-capability-node hero-capability-analytics">
                      <span aria-hidden="true"><ChartColumnIncreasing /></span>
                      <div><strong>Analytics</strong><small>Actionable insights for better decisions</small></div>
                    </div>
                    <div className="hero-capability-node hero-capability-security">
                      <span aria-hidden="true"><ShieldCheck /></span>
                      <div><strong>Security</strong><small>Protect what matters with robust security</small></div>
                    </div>
                    <div className="hero-capability-node hero-capability-reporting">
                      <span aria-hidden="true"><ChartNoAxesCombined /></span>
                      <div><strong>Reporting</strong><small>Real-time reports that drive efficiency</small></div>
                    </div>

                    <div className="hero-ecosystem-hub" aria-hidden="true">
                      <span className="hero-hub-bloom" />
                      <span className="hero-hub-platform" />
                      <span className="hero-hub-ring hero-hub-ring-outer" />
                      <span className="hero-hub-ring hero-hub-ring-middle" />
                      <span className="hero-hub-ring hero-hub-ring-inner" />
                      <span className="hero-hub-frame">
                        <img src={scartHubLogo} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-strip hero-trust-strip" aria-label="Scart credibility">
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
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-inner">
            <div className="section-heading solutions-heading">
              <div>
                <p className="eyebrow">Solutions</p>
                <h2>Reliable technology across your business stack</h2>
              </div>
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
          <div className="section-inner industries-layout">
            <div className="section-heading industry-heading">
              <p className="eyebrow">Industries served</p>
              <h2 id="industries-title">Technology for teams that run every day</h2>
              <p>
                Practical systems shaped around operating environments where
                reliability and responsive support matter.
              </p>
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

        <section className="section selected-work-section" id="work" aria-labelledby="work-title">
          <div className="section-inner">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="work-title">Solutions designed for real businesses</h2>
              </div>
              <p>
                A selection of branding, digital, and business-focused projects
                developed to help organisations present themselves clearly and
                operate professionally.
              </p>
            </div>

            <div className="work-grid">
              {featuredProjects.map((project) => (
                <article className="work-card" key={project.title}>
                  <div className="work-visual">
                    <img src={project.imageSrc} alt={project.imageAlt} />
                  </div>

                  <div className="work-card-body">
                    <p className="work-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button
                      className="work-action"
                      type="button"
                      onClick={(event) => handleProjectOpen(event, project)}
                      aria-label={`View ${project.title} project`}
                    >
                      View Project
                      <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="products" aria-labelledby="products-title">
          <div className="section-inner">
            <div className="section-heading products-heading">
              <p className="eyebrow">Scart Solutions products</p>
              <h2 id="products-title">Built for real business operations</h2>
              <p>
                Software products designed and developed in-house around
                practical business workflows.
              </p>
            </div>

            <div className="product-overview-grid product-family-system">
              <article className="product-overview-card product-overview-card-primary">
                <div className="product-card-header">
                  <span className="product-card-icon" aria-hidden="true">
                    <ModuleIcon icon="inventory" />
                  </span>
                </div>
                <p className="product-brand">Scart One</p>
                <h3>Retail-First ERP Platform</h3>
                <p className="product-description">
                  A modern ERP platform built around the day-to-day operations
                  of retail, wholesale, distribution, and growing businesses.
                </p>
                <CapabilityTags items={scartOneCapabilities} />
                <a className="product-link" href="#scart-one">
                  Meet Scart One
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </article>

              <article className="product-overview-card product-overview-card-files">
                <div className="product-card-header">
                  <span className="product-card-icon product-card-icon-files" aria-hidden="true">
                    <Files />
                  </span>
                </div>
                <p className="product-brand">Scart Files</p>
                <h3>Multi-Entity Document Platform</h3>
                <p className="product-description">
                  A structured digital filing platform for businesses that need
                  to organize, verify, search, report on, and securely manage
                  documents across multiple companies within one unified workspace.
                </p>
                <CapabilityTags items={scartFilesCapabilities} />
                <a className="product-link" href="#scart-files">
                  Meet Scart Files
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="scart-one-section" id="scart-one">
          <div className="section-inner product-showcase-layout">
            <div className="product-showcase-copy">
              <p className="eyebrow">Scart One</p>
              <h2>Retail-First ERP Platform</h2>
              <p>Run everyday business operations from one connected platform.</p>

              <div className="product-showcase-capabilities" aria-label="Scart One capabilities">
                {scartOneFeatures.map((feature) => (
                  <span key={feature.title}>
                    <i aria-hidden="true"><ModuleIcon icon={feature.icon} /></i>
                    {feature.title}
                  </span>
                ))}
              </div>

              <a className="button button-primary product-showcase-cta" href="#contact">
                Explore Scart One
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>

            <div className="product-interface product-interface-one" aria-label="Scart One operations interface preview">
              <div className="product-interface-header">
                <strong>Scart One</strong>
                <span>Business Operations</span>
              </div>
              <div className="product-interface-body">
                <nav className="product-interface-nav" aria-label="Scart One interface sections">
                  <strong>Workspace</strong>
                  <span className="active">Overview</span>
                  <span>Inventory</span>
                  <span>POS</span>
                  <span>Purchasing</span>
                  <span>GST Reporting</span>
                </nav>
                <div className="product-interface-workspace">
                  <div className="interface-workspace-heading">
                    <div>
                      <small>Connected platform</small>
                      <strong>Operations Overview</strong>
                    </div>
                    <span>Business workspace</span>
                  </div>
                  <div className="erp-interface-grid">
                    <article>
                      <small>Inventory</small>
                      <strong>Stock workspace</strong>
                      <div className="interface-donut" aria-hidden="true" />
                      <span>Items · locations · movements</span>
                    </article>
                    <article>
                      <small>POS</small>
                      <strong>Sales workflow</strong>
                      <div className="interface-line-chart" aria-hidden="true">
                        <i /><i /><i /><i /><i /><i />
                      </div>
                      <span>Daily retail operations</span>
                    </article>
                    <article className="interface-list-panel">
                      <small>Purchasing</small>
                      <strong>Purchase workflow</strong>
                      <ul>
                        <li><span>Supplier orders</span><b>Open</b></li>
                        <li><span>Goods receiving</span><b>Ready</b></li>
                        <li><span>Purchase records</span><b>Filed</b></li>
                      </ul>
                    </article>
                    <article className="interface-list-panel">
                      <small>GST Reporting</small>
                      <strong>Reporting workspace</strong>
                      <ul>
                        <li><span>Sales records</span><b>Available</b></li>
                        <li><span>Purchase records</span><b>Available</b></li>
                        <li><span>Report review</span><b>Ready</b></li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scart-files-section" id="scart-files" aria-labelledby="scart-files-title">
          <div className="section-inner product-showcase-layout product-showcase-layout-files">
            <div className="product-showcase-copy">
              <p className="eyebrow">Scart Files</p>
              <h2 id="scart-files-title">Multi-Entity Document Platform</h2>
              <p>Keep business documents structured, verified, and ready when you need them.</p>

              <div className="product-showcase-capabilities product-showcase-capabilities-files" aria-label="Scart Files capabilities">
                {scartFilesCapabilities.map((capability) => (
                  <span key={capability}>
                    <i aria-hidden="true"><Files /></i>
                    {capability}
                  </span>
                ))}
              </div>

              <a className="button button-primary product-showcase-cta" href="#contact">
                Explore Scart Files
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>

            <div className="product-interface product-interface-files" aria-label="Scart Files document workspace preview">
              <div className="product-interface-header">
                <strong>Scart Files</strong>
                <span>Document Library</span>
              </div>
              <div className="product-interface-body">
                <nav className="product-interface-nav" aria-label="Scart Files interface sections">
                  <strong>Workspace</strong>
                  <span className="active">Document Library</span>
                  <span>Companies</span>
                  <span>Document Types</span>
                  <span>Verification</span>
                  <span>Reports</span>
                  <span>Audit Trail</span>
                </nav>
                <div className="product-interface-workspace files-workspace">
                  <div className="interface-workspace-heading">
                    <div>
                      <small>Multi-company workspace</small>
                      <strong>Document Library</strong>
                    </div>
                    <span>Search documents</span>
                  </div>
                  <div className="files-status-grid">
                    <span><small>Document Type</small><strong>Structured Filing</strong></span>
                    <span><small>Status</small><strong>Verified</strong></span>
                    <span><small>Status</small><strong>Pending Verification</strong></span>
                    <span><small>Status</small><strong>Correction Required</strong></span>
                  </div>
                  <div className="document-table" role="table" aria-label="Document register preview">
                    <div className="document-table-row document-table-head" role="row">
                      <span role="columnheader">Document</span>
                      <span role="columnheader">Company</span>
                      <span role="columnheader">Document Type</span>
                      <span role="columnheader">Status</span>
                    </div>
                    <div className="document-table-row" role="row">
                      <strong role="cell">Purchase Invoice</strong><span role="cell">Company Workspace</span><span role="cell">Invoice</span><b className="verified" role="cell">Verified</b>
                    </div>
                    <div className="document-table-row" role="row">
                      <strong role="cell">GST Return</strong><span role="cell">Company Workspace</span><span role="cell">Tax Document</span><b className="pending" role="cell">Pending Verification</b>
                    </div>
                    <div className="document-table-row" role="row">
                      <strong role="cell">Bank Statement</strong><span role="cell">Company Workspace</span><span role="cell">Statement</span><b className="verified" role="cell">Verified</b>
                    </div>
                    <div className="document-table-row" role="row">
                      <strong role="cell">Company Record</strong><span role="cell">Company Workspace</span><span role="cell">Corporate Record</span><b className="correction" role="cell">Correction Required</b>
                    </div>
                  </div>
                </div>
              </div>
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
            <a className="button button-primary" href="mailto:info@scartsolutions.com">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-grid">
          <div className="footer-intro">
            <a className="brand footer-brand" href="#home">
              <img
                className="brand-logo footer-logo"
                src={scartLogo}
                alt="Scart Solutions"
                width="2048"
                height="1152"
              />
            </a>
            <p>Software, infrastructure, and support designed for real operations.</p>
          </div>

          <div>
            <h2>Solutions</h2>
            {solutions.map((solution) => (
              <a href="#solutions" key={solution.title}>{solution.title}</a>
            ))}
          </div>

          <div>
            <h2>Industries</h2>
            {industries.map((industry) => (
              <a href="#industries" key={industry.title}>{industry.title}</a>
            ))}
          </div>

          <div>
            <h2>Products</h2>
            <a href="#scart-one">Scart One</a>
            <a href="#scart-files">Scart Files</a>
          </div>

          <div>
            <h2>Company</h2>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h2>Contact</h2>
            <div className="footer-contact-item">
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:info@scartsolutions.com">info@scartsolutions.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+9607967680">+960 7967680</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} aria-hidden="true" />
              <p>
                V. Faskani
                <br />
                Sheikh Abdurahmaanu Magu
                <br />
                Vilimale, Maldives
              </p>
            </div>
          </div>
        </div>
        <div className="section-inner copyright">
          Copyright (c) 2026 Scart Solutions Private Limited. All rights reserved.
        </div>
      </footer>

      {selectedProject && (
        <Suspense fallback={null}>
          <PortfolioProjectModal
            isOpen={Boolean(selectedProject)}
            pages={selectedProject.pages}
            projectTitle={selectedProject.title}
            onClose={handleProjectClose}
          />
        </Suspense>
      )}
    </div>
  )
}

export default App
